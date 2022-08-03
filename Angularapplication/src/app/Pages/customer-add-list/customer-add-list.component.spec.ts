import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerAddListComponent } from './customer-add-list.component';

describe('CustomerAddListComponent', () => {
  let component: CustomerAddListComponent;
  let fixture: ComponentFixture<CustomerAddListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerAddListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerAddListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
