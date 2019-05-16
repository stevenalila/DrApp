import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehiclesEditComponent } from './vehicles-edit.component';
import { VehiclesEditRoutingModule } from './vehicles-edit-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    VehiclesEditRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    VehiclesEditComponent
  ]
})
export class VehiclesEditModule { }
