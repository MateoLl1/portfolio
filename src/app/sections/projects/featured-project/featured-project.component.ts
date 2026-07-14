import { Component, Input, inject } from '@angular/core';
import { FeaturedProject } from '../../../data/content';
import { RevealDirective } from '../../../core/reveal.directive';
import { ImageLightboxService } from '../../../core/image-lightbox.service';

@Component({
  selector: 'app-featured-project',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './featured-project.component.html',
  styleUrl: './featured-project.component.scss',
})
export class FeaturedProjectComponent {
  private readonly lightbox = inject(ImageLightboxService);

  @Input({ required: true }) project!: FeaturedProject;
  @Input() overline = '';
  @Input() reversed = false;

  openLightbox(): void {
    if (this.project.image) {
      this.lightbox.open(this.project.image, this.project.name);
    }
  }
}
