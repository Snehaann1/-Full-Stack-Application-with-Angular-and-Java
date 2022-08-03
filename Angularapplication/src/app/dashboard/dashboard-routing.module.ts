import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'customerAddList',
        loadChildren: () =>
          import('./../Pages/customer-add-list/customer-add-list.module').then(
            (m) => m.CustomerAddListModule
          ),
      },
      {
        path: 'appointmentAddList',
        loadChildren: () =>
          import(
            './../Pages/appointment-add-list/appointment-add-list.module'
          ).then((m) => m.AppointmentAddListModule),
      },
      {
        path: 'CustomAppointmentDetails',
        loadChildren: () =>
          import(
            './../Pages/customer-appointment-details/customer-appointment-details.module'
          ).then((m) => m.CustomerAppointmentDetailsModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
