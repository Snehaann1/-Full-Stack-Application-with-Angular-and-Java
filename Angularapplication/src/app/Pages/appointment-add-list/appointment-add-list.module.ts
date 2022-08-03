import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppointmentAddListRoutingModule } from './appointment-add-list-routing.module';
import { AppointmentAddListComponent } from './appointment-add-list.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [AppointmentAddListComponent],
  imports: [
    CommonModule,
    AppointmentAddListRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
  ],
})
export class AppointmentAddListModule {}
