import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-discover-section',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './discover-section.component.html',
  styleUrl: './discover-section.component.scss',
})
export class DiscoverSectionComponent {}
