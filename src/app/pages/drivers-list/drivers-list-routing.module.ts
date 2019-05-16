import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DriversListComponent } from './drivers-list.component';

const routes: Routes = [
  {
    path: '',
    component: DriversListComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DriversListRoutingModule { }
