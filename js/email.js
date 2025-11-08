// js/email.js
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact_form');
  if (!form) return;

  const sendBtn    = document.getElementById('send_message');
  const msgBox     = form.querySelector('.returnmessage');
  const emptyAlert = form.querySelector('.empty_notice');

  // Asegurar names/required/tipos (FormSubmit requiere "name")
  const fields = {
    name:    form.querySelector('#name'),
    email:   form.querySelector('#email'),
    phone:   form.querySelector('#phone'),
    subject: form.querySelector('#subject'),
    message: form.querySelector('#message')
  };
  if (fields.name   && !fields.name.name)   fields.name.name   = 'name';
  if (fields.email  && !fields.email.name)  fields.email.name  = 'email';
  if (fields.phone  && !fields.phone.name)  fields.phone.name  = 'phone';
  if (fields.subject&& !fields.subject.name)fields.subject.name= 'subject';
  if (fields.message&& !fields.message.name)fields.message.name= 'message';

  if (fields.name)    fields.name.required    = true;
  if (fields.email) { fields.email.required   = true; fields.email.type = 'email'; }
  if (fields.subject) fields.subject.required = true;
  if (fields.message) fields.message.required = true;

  // Configurar destino FormSubmit (si tu HTML aún tiene action="/")
  if (!form.action || form.action === window.location.origin + '/') {
    form.action = 'https://formsubmit.co/mateollerena40@gmail.com';
  }
  form.method = 'POST';

  // Utilidades
  const addHidden = (name, value) => {
    let el = form.querySelector(`input[name="${name}"]`);
    if (!el) {
      el = document.createElement('input');
      el.type = 'hidden';
      el.name = name;
      form.appendChild(el);
    }
    if (value !== undefined) el.value = value;
    return el;
  };

  // Config FormSubmit
  const subjectHidden = addHidden('_subject', 'Nuevo contacto — Portafolio');
  addHidden('_template', 'table');
  addHidden('_captcha', 'false');

  // Honeypot anti-spam (debe ser type="text")
  if (!form.querySelector('input[name="_honey"]')) {
    const honeypot = document.createElement('input');
    honeypot.type = 'text';
    honeypot.name = '_honey';
    honeypot.style.display = 'none';
    honeypot.tabIndex = -1;
    honeypot.autocomplete = 'off';
    form.appendChild(honeypot);
  }

  // (Opcional) Redirección a gracias.html
  // addHidden('_next', 'https://TU_USUARIO.github.io/gracias.html');

  // Hacer que el <a> envíe el formulario
  if (sendBtn) {
    sendBtn.addEventListener('click', (e) => {
      e.preventDefault();
      form.requestSubmit();
    });
  }

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Validación nativa
    if (!form.reportValidity()) {
      if (emptyAlert) emptyAlert.style.display = 'block';
      return;
    } else {
      if (emptyAlert) emptyAlert.style.display = 'none';
    }

    // Subject dinámico (incluye lo que escribió el usuario)
    if (fields.subject && subjectHidden) {
      subjectHidden.value = `Contacto — ${fields.subject.value || 'Portafolio'}`;
    }

    // UI bloqueada + mensaje
    const disable = () => {
      if (sendBtn) {
        sendBtn.classList.add('disabled');
        sendBtn.setAttribute('aria-disabled', 'true');
        sendBtn.style.pointerEvents = 'none';
        sendBtn.style.opacity = '0.6';
      }
    };
    const enable = () => {
      if (sendBtn) {
        sendBtn.classList.remove('disabled');
        sendBtn.removeAttribute('aria-disabled');
        sendBtn.style.pointerEvents = '';
        sendBtn.style.opacity = '';
      }
    };

    if (msgBox) { msgBox.textContent = 'Enviando...'; msgBox.style.display = 'block'; }
    disable();

    try {
      const fd  = new FormData(form);
      const res = await fetch(form.action, {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: fd
      });

      if (res.ok) {
        if (msgBox) msgBox.textContent = '¡Gracias! Tu mensaje fue enviado.';
        form.reset();
      } else {
        let text = 'Hubo un problema al enviar. Intenta de nuevo.';
        try {
          const data = await res.json();
          if (data && data.message) text = data.message;
        } catch {}
        if (msgBox) msgBox.textContent = text;
      }
    } catch {
      if (msgBox) msgBox.textContent = 'Sin conexión o error de red. Intenta nuevamente.';
    } finally {
      enable();
    }
  });
});
