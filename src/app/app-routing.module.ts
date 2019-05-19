// DEPENDENCIES
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// SECURITY
import { AuthGuard } from './security/auth.guard';

/**
 * WEB APP ROUTES
 */
const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },

    /* START MY VIEWS */

    { path: 'ContactUs', loadChildren: './pages/contact-us/contact-us.module#ContactUsModule', canActivate: [AuthGuard] },
    { path: 'customerses/:id', loadChildren: './pages/customers-edit/customers-edit.module#CustomersEditModule', canActivate: [AuthGuard] },
    { path: 'customerLists', loadChildren: './pages/customers-list/customers-list.module#CustomersListModule', canActivate: [AuthGuard] },
    { path: 'driverses/:id', loadChildren: './pages/drivers-edit/drivers-edit.module#DriversEditModule', canActivate: [AuthGuard] },
    { path: 'driverses', loadChildren: './pages/drivers-list/drivers-list.module#DriversListModule', canActivate: [AuthGuard] },
    { path: 'home', loadChildren: './pages/home/home.module#HomeModule', canActivate: [AuthGuard] },
    { path: 'SignUp', loadChildren: './pages/sign-up/sign-up.module#SignUpModule', canActivate: [AuthGuard] },
    { path: 'staffs/:id', loadChildren: './pages/staff-edit/staff-edit.module#StaffEditModule', canActivate: [AuthGuard] },
    { path: 'staffs', loadChildren: './pages/staff-list/staff-list.module#StaffListModule', canActivate: [AuthGuard] },
    { path: 'vehicleses/:id', loadChildren: './pages/vehicles-edit/vehicles-edit.module#VehiclesEditModule', canActivate: [AuthGuard] },
    { path: 'vehicleses', loadChildren: './pages/vehicles-list/vehicles-list.module#VehiclesListModule', canActivate: [AuthGuard] },

 /* END MY VIEWS */

    // SECURITY
    { path: 'login', loadChildren: './pages/login/login.module#LoginModule' }
];

/**
 * ROUTING MODULE
 */
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
