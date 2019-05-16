import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VehiclesListComponent } from './vehicles-list.component';

const routes: Routes = [
  {
    path: '',
    component: VehiclesListComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VehiclesListRoutingModule { }
