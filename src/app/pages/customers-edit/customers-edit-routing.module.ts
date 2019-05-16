import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomersEditComponent } from './customers-edit.component';

const routes: Routes = [
  {
    path: '',
    component: CustomersEditComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersEditRoutingModule { }
