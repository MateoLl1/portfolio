import { Component, Input } from '@angular/core';
import { FeaturedProject } from '../../../data/content';
import { RevealDirective } from '../../../core/reveal.directive';

@Component({
  selector: 'app-featured-project',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './featured-project.component.html',
  styleUrl: './featured-project.component.scss',
})
export class FeaturedProjectComponent {
  @Input({ required: true }) project!: FeaturedProject;
  @Input() overline = '';
  @Input() reversed = false;
}
