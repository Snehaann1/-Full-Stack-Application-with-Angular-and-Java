import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentAddListComponent } from './appointment-add-list.component';

const routes: Routes = [{ path: '', component: AppointmentAddListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppointmentAddListRoutingModule { }
