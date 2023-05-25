import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentWelcomePageComponent } from './student-welcome-page.component';

describe('StudentWelcomePageComponent', () => {
  let component: StudentWelcomePageComponent;
  let fixture: ComponentFixture<StudentWelcomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentWelcomePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentWelcomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
