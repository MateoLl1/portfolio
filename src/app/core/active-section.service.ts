import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ActiveSectionService {
  readonly activeId = signal<string | null>(null);
  private observer?: IntersectionObserver;

  observe(sectionIds: string[]): void {
    this.observer?.disconnect();

    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    this.observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) {
          this.activeId.set(visible.target.id);
        }
      },
      { rootMargin: '-20% 0px -60% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] },
    );

    elements.forEach((el) => this.observer?.observe(el));
  }
}
