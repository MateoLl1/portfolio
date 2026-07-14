import { Component, Input, inject } from '@angular/core';
import { GridProject } from '../../../data/content';
import { RevealDirective } from '../../../core/reveal.directive';
import { ImageLightboxService } from '../../../core/image-lightbox.service';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss',
})
export class ProjectCardComponent {
  private readonly lightbox = inject(ImageLightboxService);

  @Input({ required: true }) project!: GridProject;

  openLightbox(): void {
    if (this.project.image) {
      this.lightbox.open(this.project.image, this.project.name);
    }
  }
}
