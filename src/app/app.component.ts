import { AfterViewInit, Component, inject } from '@angular/core';
import { ActiveSectionService } from './core/active-section.service';
import { SECTION_IDS } from './data/content';
import { TopnavComponent } from './layout/topnav/topnav.component';
import { SocialRailComponent } from './layout/rails/social-rail.component';
import { EmailRailComponent } from './layout/rails/email-rail.component';
import { HeroComponent } from './sections/hero/hero.component';
import { AboutComponent } from './sections/about/about.component';
import { ExperienceComponent } from './sections/experience/experience.component';
import { ProjectsComponent } from './sections/projects/projects.component';
import { ContactComponent } from './sections/contact/contact.component';
import { ImageLightboxComponent } from './shared/image-lightbox/image-lightbox.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    TopnavComponent,
    SocialRailComponent,
    EmailRailComponent,
    HeroComponent,
    AboutComponent,
    ExperienceComponent,
    ProjectsComponent,
    ContactComponent,
    ImageLightboxComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements AfterViewInit {
  private readonly activeSectionService = inject(ActiveSectionService);

  ngAfterViewInit(): void {
    this.activeSectionService.observe(SECTION_IDS);
  }
}
