import { Component } from '@angular/core';
import { SOCIAL_LINKS } from '../../data/content';

@Component({
  selector: 'app-social-rail',
  standalone: true,
  templateUrl: './social-rail.component.html',
  styleUrl: './rail.component.scss',
})
export class SocialRailComponent {
  readonly social = SOCIAL_LINKS;
}
