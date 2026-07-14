import { Component, computed, inject, signal } from '@angular/core';
import { LanguageService } from '../../core/language.service';
import { RevealDirective } from '../../core/reveal.directive';
import { CONTENT, WEB3FORMS_ENDPOINT, WEB3FORMS_ACCESS_KEY, SOCIAL_LINKS } from '../../data/content';

type SendStatus = 'idle' | 'sending' | 'success' | 'error' | 'invalid';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  private readonly languageService = inject(LanguageService);
  readonly content = computed(() => CONTENT[this.languageService.lang()]);
  readonly social = SOCIAL_LINKS;
  readonly web3formsEndpoint = WEB3FORMS_ENDPOINT;
  readonly web3formsAccessKey = WEB3FORMS_ACCESS_KEY;

  readonly status = signal<SendStatus>('idle');

  async onSubmit(event: Event): Promise<void> {
    event.preventDefault();
    const form = event.target as HTMLFormElement;

    if (!form.reportValidity()) {
      this.status.set('invalid');
      return;
    }

    this.status.set('sending');

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(form),
      });
      const result = await response.json();

      if (response.ok && result.success) {
        this.status.set('success');
        form.reset();
      } else {
        this.status.set('error');
      }
    } catch {
      this.status.set('error');
    }
  }
}
