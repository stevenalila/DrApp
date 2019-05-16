import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DriversEditComponent } from './drivers-edit.component';
import { DriversEditRoutingModule } from './drivers-edit-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    DriversEditRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    DriversEditComponent
  ]
})
export class DriversEditModule { }
