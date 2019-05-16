import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaffEditComponent } from './staff-edit.component';
import { StaffEditRoutingModule } from './staff-edit-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    StaffEditRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    StaffEditComponent
  ]
})
export class StaffEditModule { }
