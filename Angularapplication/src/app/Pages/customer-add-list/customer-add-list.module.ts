import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerAddListRoutingModule } from './customer-add-list-routing.module';
import { CustomerAddListComponent } from './customer-add-list.component';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { OrderModule } from 'ngx-order-pipe';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  declarations: [CustomerAddListComponent],
  imports: [
    CommonModule,
    CustomerAddListRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatInputModule,
    OrderModule,
    FontAwesomeModule,
    NgxPaginationModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
})
export class CustomerAddListModule {}
