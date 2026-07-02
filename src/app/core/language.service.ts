import { Injectable, signal } from '@angular/core';

export type Lang = 'es' | 'en';

const STORAGE_KEY = 'portfolio-lang';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  readonly lang = signal<Lang>(this.readInitialLang());

  toggle(): void {
    this.set(this.lang() === 'es' ? 'en' : 'es');
  }

  set(lang: Lang): void {
    this.lang.set(lang);
    localStorage.setItem(STORAGE_KEY, lang);
  }

  private readInitialLang(): Lang {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'es' || stored === 'en') {
      return stored;
    }
    return navigator.language.toLowerCase().startsWith('en') ? 'en' : 'es';
  }
}
