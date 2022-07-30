import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HardYsoftSkillsComponent } from './hard-ysoft-skills.component';

describe('HardYsoftSkillsComponent', () => {
  let component: HardYsoftSkillsComponent;
  let fixture: ComponentFixture<HardYsoftSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HardYsoftSkillsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HardYsoftSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
