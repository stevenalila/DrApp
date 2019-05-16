import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaffListComponent } from './staff-list.component';
import { StaffListRoutingModule } from './staff-list-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    StaffListRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    StaffListComponent
  ]
})
export class StaffListModule { }
