import { Injectable, signal } from '@angular/core';

export type Lang = 'es' | 'en';

const STORAGE_KEY = 'portfolio-lang';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  readonly lang = signal<Lang>(this.readInitialLang());

  constructor() {
    document.documentElement.lang = this.lang();
  }

  toggle(): void {
    this.set(this.lang() === 'es' ? 'en' : 'es');
  }

  set(lang: Lang): void {
    this.lang.set(lang);
    localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang;
  }

  private readInitialLang(): Lang {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'es' || stored === 'en') {
      return stored;
    }
    return navigator.language.toLowerCase().startsWith('en') ? 'en' : 'es';
  }
}
