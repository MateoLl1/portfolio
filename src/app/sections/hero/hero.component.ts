import { Component, computed, inject } from '@angular/core';
import { LanguageService } from '../../core/language.service';
import { CONTENT } from '../../data/content';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  private readonly languageService = inject(LanguageService);
  readonly content = computed(() => CONTENT[this.languageService.lang()]);
}
