import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehiclesListComponent } from './vehicles-list.component';
import { VehiclesListRoutingModule } from './vehicles-list-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    VehiclesListRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    VehiclesListComponent
  ]
})
export class VehiclesListModule { }
