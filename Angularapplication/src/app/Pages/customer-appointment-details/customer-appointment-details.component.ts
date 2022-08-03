import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ApiService } from 'src/app/shared/api.service';
import { Appointment } from 'src/app/Pages/appointment-add-list/Appointment';

@Component({
  selector: 'app-customer-appointment-details',
  templateUrl: './customer-appointment-details.component.html',
  styleUrls: ['./customer-appointment-details.component.scss'],
})
export class CustomerAppointmentDetailsComponent implements OnInit {
  CustomerData: any;
  AppointmentData: any;
  AppointDetails: Appointment = new Appointment();
  formValue: FormGroup;
  subject: any = [
    'Select Subject',
    'Deployment',
    'TeamMeet',
    'ApplicationUpgrade',
  ];
  DetailList: [
    {
      id: any;
      name: any;
      appdate: any;
      apptime: any;
      about: any;
      discussion: any;
      location: any;
    }
  ] = [
    {
      id: '',
      name: '',
      appdate: '',
      apptime: '',
      about: '',
      discussion: '',
      location: '',
    },
  ];
  message: any;
  NameList: any;
  isCustomerSelected: boolean = false;

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
    this.getAllCustomer();
    this.NameList = this.getAType();
  }

  getAType() {
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

  getAllCustomer() {
    this.api.getCustomer().subscribe((res) => {
      this.CustomerData = res;
    });
  }

  getAppointments() {
    this.api.getAppointment().subscribe((res) => {
      this.AppointmentData = res;
    });
  }

  getType() {
    return this.api.getAppointment();
  }

  onClick(name) {
    this.DetailList.splice(0);
    this.AppointmentData.forEach((element) => {
      if (element.customers == name) {
        this.DetailList.push({
          id: element.id,
          name: element.customers,
          appdate: element.dateofapointment,
          apptime: element.time,
          about: element.about,
          discussion: element.discussion,
          location: element.location,
        });
        this.isCustomerSelected = true;
      } else {
        this.message = 'No Appointments made yet!';
      }
    });
  }

  deleteappointment(datas: any) {
    if (confirm('Are you sure to deleted?')) {
      this.api.deleteAppointment(datas.id).subscribe((res) => {
        this.getAppointments();
      });
    }
  }

  onEdit(datas: any) {
    this.AppointDetails.id = datas.id;
    this.formValue.controls['customers'].setValue(datas.name);
    this.formValue.controls['dateofapointment'].setValue(datas.appdate);
    this.formValue.controls['about'].setValue(datas.about);
    this.formValue.controls['location'].setValue(datas.location);
    this.formValue.controls['time'].setValue(datas.apptime);
    this.formValue.controls['discussion'].setValue(datas.discussion);
  }

  updateAppointment() {
    this.AppointDetails.customers = this.formValue.value.customers;
    this.AppointDetails.dateofapointment =
      this.formValue.value.dateofapointment;
    this.AppointDetails.about = this.formValue.value.about;
    this.AppointDetails.location = this.formValue.value.location;
    this.AppointDetails.time = this.formValue.value.time;
    this.AppointDetails.discussion = this.formValue.value.discussion;
    this.api
      .updateAppointment(this.AppointDetails, this.AppointDetails.id)
      .subscribe((res) => {
        alert('updated sucessfully');
        this.getAppointments();
      });
  }
}
