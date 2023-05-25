import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherWelcomePageComponent } from './teacher-welcome-page.component';

describe('TeacherWelcomePageComponent', () => {
  let component: TeacherWelcomePageComponent;
  let fixture: ComponentFixture<TeacherWelcomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherWelcomePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeacherWelcomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
