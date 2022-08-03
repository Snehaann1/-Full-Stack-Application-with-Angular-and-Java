import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerAppointmentDetailsComponent } from './customer-appointment-details.component';

describe('CustomerAppointmentDetailsComponent', () => {
  let component: CustomerAppointmentDetailsComponent;
  let fixture: ComponentFixture<CustomerAppointmentDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerAppointmentDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerAppointmentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
