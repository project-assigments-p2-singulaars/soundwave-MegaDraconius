import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { SoundwaveSectionComponent } from './soundwave-section/soundwave-section.component';
import { FooterComponent } from './footer/footer.component';
import { DiscoverSectionComponent } from './discover-section/discover-section.component';
import { JoinSectionComponent } from './join-section/join-section.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    SoundwaveSectionComponent,
    DiscoverSectionComponent,
    FooterComponent,
    JoinSectionComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'soundwave-project';
}
