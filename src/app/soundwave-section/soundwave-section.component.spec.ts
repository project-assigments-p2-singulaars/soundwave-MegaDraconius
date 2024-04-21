import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoundwaveSectionComponent } from './soundwave-section.component';

describe('SoundwaveSectionComponent', () => {
  let component: SoundwaveSectionComponent;
  let fixture: ComponentFixture<SoundwaveSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SoundwaveSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SoundwaveSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
