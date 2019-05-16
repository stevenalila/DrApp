import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersEditComponent } from './customers-edit.component';
import { CustomersEditRoutingModule } from './customers-edit-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    CustomersEditRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    CustomersEditComponent
  ]
})
export class CustomersEditModule { }
