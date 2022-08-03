import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  postCustomer(data: any) {
    return this.http
      .post<any>('http://localhost:3000/customerDetails', data)
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }

  getCustomer() {
    return this.http.get<any>('http://localhost:3000/customerDetails').pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  deleteCustomer(id: number) {
    return this.http
      .delete<any>('http://localhost:3000/customerDetails/' + id)
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }

  updateCustomer(data: any, id: number) {
    return this.http
      .put<any>('http://localhost:3000/customerDetails/' + id, data)
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }

  postAppointment(data: any) {
    return this.http
      .post<any>('http://localhost:3000/appointmentdetails', data)
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }

  getAppointment() {
    return this.http.get<any>('http://localhost:3000/appointmentdetails').pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  deleteAppointment(id: number) {
    return this.http
      .delete<any>('http://localhost:3000/appointmentdetails/' + id)
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }

  deleteAllAppointment(name: String) {
    return this.http
      .delete<any>('http://localhost:3000/appointmentdetails/' + name)
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }

  updateAppointment(data: any, id: number) {
    return this.http
      .put<any>('http://localhost:3000/appointmentdetails/' + id, data)
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }

  getData() {
    return this.http.get('https://jsonplaceholder.typicode.com/todos');
  }
}
