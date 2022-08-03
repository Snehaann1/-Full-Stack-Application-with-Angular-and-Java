import { Component, OnInit } from '@angular/core';
import { CustomerDetails } from 'src/app/Pages/customer-add-list/CustomerDetails';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from 'src/app/shared/api.service';

@Component({
  selector: 'app-customer-add-list',
  templateUrl: './customer-add-list.component.html',
  styleUrls: ['./customer-add-list.component.scss'],
})
export class CustomerAddListComponent implements OnInit {
  search: String = '';
  exform: FormGroup;
  p: number = 1;
  CustomerModel: CustomerDetails = new CustomerDetails();
  CustomerData!: any;
  customer: String = '';
  public birthdate: any = {};
  public age: any = {};

  constructor(private api: ApiService) {}
  ngOnInit() {
    this.exform = new FormGroup({
      id: new FormControl(null),
      name: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      phone: new FormControl(null, [
        Validators.required,
        Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$'),
      ]),
      birthdate: new FormControl(null),
      age: new FormControl(null),
      profession: new FormControl(null),
      Gender: new FormControl(null),
    });

    this.getAllCustomer();
  }

  get name() {
    return this.exform.get('name');
  }

  get email() {
    return this.exform.get('email');
  }

  get phone() {
    return this.exform.get('phone');
  }

  postCustomerDetails() {
    this.CustomerModel.name = this.exform.value.name;
    this.CustomerModel.email = this.exform.value.email;
    this.CustomerModel.phone = this.exform.value.phone;
    this.CustomerModel.birthdate = this.exform.value.birthdate;
    this.CustomerModel.age = this.CalculateAge(this.birthdate.name);
    this.CustomerModel.profession = this.exform.value.profession;
    this.CustomerModel.Gender = this.exform.value.Gender;
    this.api.postCustomer(this.CustomerModel).subscribe(
      (res) => {
        alert('Employee Added Successfully');
        this.exform.reset();
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

  deleteCustomer(row: any) {
    if (confirm('Are you sure to deleted?')) {
      this.api.deleteCustomer(row.id).subscribe((res) => {
        this.getAllCustomer();
      });
    }
  }
  onEdit(row: any) {
    this.CustomerModel.id = row.id;
    this.exform.controls['name'].setValue(row.name);
    this.exform.controls['email'].setValue(row.email);
    this.exform.controls['phone'].setValue(row.phone);
    this.exform.controls['birthdate'].setValue(row.birthdate);
    this.exform.controls['age'].setValue(row.age);
    this.exform.controls['profession'].setValue(row.profession);
    this.exform.controls['Gender'].setValue(row.Gender);
  }

  updateCustomer() {
    this.CustomerModel.name = this.exform.value.name;
    this.CustomerModel.email = this.exform.value.email;
    this.CustomerModel.phone = this.exform.value.phone;
    this.CustomerModel.birthdate = this.exform.value.birthdate;
    this.CustomerModel.age = this.CalculateAge(this.birthdate.name);
    this.CustomerModel.profession = this.exform.value.profession;
    this.CustomerModel.Gender = this.exform.value.Gender;
    this.api
      .updateCustomer(this.CustomerModel, this.CustomerModel.id)
      .subscribe((res) => {
        alert('updated sucessfully');

        this.getAllCustomer();
      });
  }

  Search() {
    if (this.customer == '') {
      this.ngOnInit();
    } else if (this.customer != '') {
      this.CustomerData = this.CustomerData.filter((res) => {
        return res.name
          .toLocaleLowerCase()
          .match(this.customer.toLocaleLowerCase());
      });
    }
  }

  key: string = 'name';
  reverse: boolean = false;
  sort(key) {
    this.key = key;
    this.reverse = !this.reverse;
  }

  CalculateAge(value: any): number {
    let val = new Date(value).getFullYear();
    let today = new Date().getFullYear();
    let age = today - val;
    return age;
  }
  public onSubmit(): void {
    this.age.name = this.CalculateAge(this.birthdate.name);
  }
}
