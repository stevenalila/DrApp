import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VehiclesEditComponent } from './vehicles-edit.component';

const routes: Routes = [
  {
    path: '',
    component: VehiclesEditComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VehiclesEditRoutingModule { }
