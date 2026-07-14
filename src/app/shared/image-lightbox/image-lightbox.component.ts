import { Component, HostListener, inject } from '@angular/core';
import { ImageLightboxService } from '../../core/image-lightbox.service';

@Component({
  selector: 'app-image-lightbox',
  standalone: true,
  templateUrl: './image-lightbox.component.html',
  styleUrl: './image-lightbox.component.scss',
})
export class ImageLightboxComponent {
  private readonly lightbox = inject(ImageLightboxService);
  readonly image = this.lightbox.image;

  close(): void {
    this.lightbox.close();
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.close();
  }
}
