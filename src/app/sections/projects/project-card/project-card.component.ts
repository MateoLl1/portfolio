import { Component, Input } from '@angular/core';
import { GridProject } from '../../../data/content';
import { RevealDirective } from '../../../core/reveal.directive';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss',
})
export class ProjectCardComponent {
  @Input({ required: true }) project!: GridProject;
}
