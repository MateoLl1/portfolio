import { Component } from '@angular/core';
import { SOCIAL_LINKS } from '../../data/content';

@Component({
  selector: 'app-email-rail',
  standalone: true,
  templateUrl: './email-rail.component.html',
  styleUrl: './rail.component.scss',
})
export class EmailRailComponent {
  readonly social = SOCIAL_LINKS;
}
