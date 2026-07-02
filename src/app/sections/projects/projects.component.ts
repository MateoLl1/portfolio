import { Component, computed, inject, signal } from '@angular/core';
import { LanguageService } from '../../core/language.service';
import { RevealDirective } from '../../core/reveal.directive';
import { CONTENT } from '../../data/content';
import { FeaturedProjectComponent } from './featured-project/featured-project.component';
import { ProjectCardComponent } from './project-card/project-card.component';

const INITIAL_VISIBLE = 6;

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [RevealDirective, FeaturedProjectComponent, ProjectCardComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  private readonly languageService = inject(LanguageService);
  readonly content = computed(() => CONTENT[this.languageService.lang()]);
  readonly expanded = signal(false);

  readonly visibleOther = computed(() => {
    const other = this.content().projects.other;
    return this.expanded() ? other : other.slice(0, INITIAL_VISIBLE);
  });

  readonly hasMore = computed(() => this.content().projects.other.length > INITIAL_VISIBLE);

  toggleExpanded(): void {
    this.expanded.update((value) => !value);
  }
}
