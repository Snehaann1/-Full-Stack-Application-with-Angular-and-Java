import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/api.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Appointment } from 'src/app/Pages/appointment-add-list/Appointment';

@Component({
  selector: 'app-appointment-add-list',
  templateUrl: './appointment-add-list.component.html',
  styleUrls: ['./appointment-add-list.component.scss'],
})
export class AppointmentAddListComponent implements OnInit {
  formValue: FormGroup;
  AppointDetails: Appointment = new Appointment();
  AppointmentData: any;
  isLoaded = false;
  NameList: any;
  subject: any = [
    'select subject',
    'Deployment',
    'TeamMeet',
    'ApplicationUpgrade',
  ];

  constructor(private formbuilder: FormBuilder, private api: ApiService) {}

  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      id: [''],
      customers: [''],
      dateofapointment: [''],
      about: [''],
      location: [''],
      discussion: [],
      time: [''],
    });
    this.getAppointments();

    this.NameList = this.getType();
  }

  getType() {
    return this.api.getCustomer();
  }

  postAppointmentDetails() {
    this.AppointDetails.customers = this.formValue.value.customers;
    this.AppointDetails.dateofapointment =
      this.formValue.value.dateofapointment;
    this.AppointDetails.about = this.formValue.value.about;
    this.AppointDetails.location = this.formValue.value.location;
    this.AppointDetails.time = this.formValue.value.time;
    this.AppointDetails.discussion = this.formValue.value.discussion;
    this.api.postAppointment(this.AppointDetails).subscribe(
      (res) => {
        alert('details Added Successfully');
        this.formValue.reset();
      },
      (err) => {
        alert('something went wrong');
      }
    );
  }

  getAppointments() {
    this.api.getAppointment().subscribe((res) => {
      this.AppointmentData = res;
    });
  }

  deleteappointment(row: any) {
    if (confirm('Are you sure to deleted?')) {
      this.api.deleteAppointment(row.id).subscribe((res) => {
        this.getAppointments();
      });
    }
  }
}
