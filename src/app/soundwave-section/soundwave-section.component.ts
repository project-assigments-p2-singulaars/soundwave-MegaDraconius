import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-soundwave-section',
  standalone: true,
  imports: [HeaderComponent, RouterLink],
  templateUrl: './soundwave-section.component.html',
  styleUrl: './soundwave-section.component.scss',
})
export class SoundwaveSectionComponent {}
