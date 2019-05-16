import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DriversListComponent } from './drivers-list.component';
import { DriversListRoutingModule } from './drivers-list-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    DriversListRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    DriversListComponent
  ]
})
export class DriversListModule { }
