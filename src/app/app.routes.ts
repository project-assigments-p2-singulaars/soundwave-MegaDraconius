import { Routes } from '@angular/router';
import { DiscoverSectionComponent } from './discover-section/discover-section.component';
import { JoinSectionComponent } from './join-section/join-section.component';
import { SoundwaveSectionComponent } from './soundwave-section/soundwave-section.component';

export const routes: Routes = [
  {
    path: '',
    component: SoundwaveSectionComponent,
  },
  {
    path: 'discover',
    component: DiscoverSectionComponent,
  },
  {
    path: 'join',
    component: JoinSectionComponent,
  },
];
