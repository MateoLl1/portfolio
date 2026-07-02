import { Component, computed, inject } from '@angular/core';
import { LanguageService } from '../../core/language.service';
import { RevealDirective } from '../../core/reveal.directive';
import { CONTENT } from '../../data/content';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  private readonly languageService = inject(LanguageService);
  readonly content = computed(() => CONTENT[this.languageService.lang()]);
}
