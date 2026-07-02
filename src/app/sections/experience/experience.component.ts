import { Component, computed, inject, signal } from '@angular/core';
import { LanguageService } from '../../core/language.service';
import { RevealDirective } from '../../core/reveal.directive';
import { CONTENT } from '../../data/content';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent {
  private readonly languageService = inject(LanguageService);
  readonly content = computed(() => CONTENT[this.languageService.lang()]);
  readonly activeIndex = signal(0);

  selectTab(index: number): void {
    this.activeIndex.set(index);
  }
}
