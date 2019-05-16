import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersListComponent } from './customers-list.component';
import { CustomersListRoutingModule } from './customers-list-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    CustomersListRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    CustomersListComponent
  ]
})
export class CustomersListModule { }
