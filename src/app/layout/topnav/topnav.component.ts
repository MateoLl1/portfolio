import { NgTemplateOutlet } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { ActiveSectionService } from '../../core/active-section.service';
import { LanguageService } from '../../core/language.service';
import { CONTENT, RESUME_URL } from '../../data/content';

@Component({
  selector: 'app-topnav',
  standalone: true,
  imports: [NgTemplateOutlet],
  templateUrl: './topnav.component.html',
  styleUrl: './topnav.component.scss',
})
export class TopnavComponent {
  private readonly languageService = inject(LanguageService);
  private readonly activeSectionService = inject(ActiveSectionService);

  readonly lang = this.languageService.lang;
  readonly activeId = this.activeSectionService.activeId;
  readonly content = computed(() => CONTENT[this.lang()]);
  readonly resumeUrl = RESUME_URL;
  readonly menuOpen = signal(false);

  toggleLanguage(): void {
    this.languageService.toggle();
  }

  toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }
}
