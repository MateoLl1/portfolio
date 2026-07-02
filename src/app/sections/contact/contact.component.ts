import { Component, computed, inject } from '@angular/core';
import { LanguageService } from '../../core/language.service';
import { RevealDirective } from '../../core/reveal.directive';
import { CONTENT, SOCIAL_LINKS } from '../../data/content';

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
}
