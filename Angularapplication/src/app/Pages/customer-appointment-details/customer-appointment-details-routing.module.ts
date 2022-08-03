import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerAppointmentDetailsComponent } from './customer-appointment-details.component';

const routes: Routes = [{ path: '', component: CustomerAppointmentDetailsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerAppointmentDetailsRoutingModule { }
