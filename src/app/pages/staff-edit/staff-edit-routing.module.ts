import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StaffEditComponent } from './staff-edit.component';

const routes: Routes = [
  {
    path: '',
    component: StaffEditComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaffEditRoutingModule { }
