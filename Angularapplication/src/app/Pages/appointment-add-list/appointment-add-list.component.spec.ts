import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentAddListComponent } from './appointment-add-list.component';

describe('AppointmentAddListComponent', () => {
  let component: AppointmentAddListComponent;
  let fixture: ComponentFixture<AppointmentAddListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppointmentAddListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppointmentAddListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
