import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMarksheetComponent } from './create-marksheet.component';

describe('CreateMarksheetComponent', () => {
  let component: CreateMarksheetComponent;
  let fixture: ComponentFixture<CreateMarksheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateMarksheetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateMarksheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
