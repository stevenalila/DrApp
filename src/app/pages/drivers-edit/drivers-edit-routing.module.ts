import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DriversEditComponent } from './drivers-edit.component';

const routes: Routes = [
  {
    path: '',
    component: DriversEditComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DriversEditRoutingModule { }
