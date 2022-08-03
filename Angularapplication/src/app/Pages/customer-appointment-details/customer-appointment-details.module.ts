import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { CustomerAppointmentDetailsRoutingModule } from './customer-appointment-details-routing.module';
import { CustomerAppointmentDetailsComponent } from './customer-appointment-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CustomerAppointmentDetailsComponent],
  imports: [
    CommonModule,
    CustomerAppointmentDetailsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
  ],
})
export class CustomerAppointmentDetailsModule {}
