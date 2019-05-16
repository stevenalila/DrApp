import { NgModule } from '@angular/core';

/* START MY SERVICES IMPORTS */
// Do not edit this comment content, it will be overwritten in next Skaffolder generation
import { CustomersService } from './services/customers.service';
import { DriversService } from './services/drivers.service';
import { StaffService } from './services/staff.service';
import { UserService } from './services/user.service';
import { VehiclesService } from './services/vehicles.service';

/* END MY SERVICES IMPORTS */

import { AuthGuard } from './security/auth.guard';
import { AuthenticationService } from './security/authentication.service';

@NgModule({
  imports: [],
  providers: [
    /* START PROVIDERS */
// Do not edit this comment content, it will be overwritten in next Skaffolder generation
    CustomersService,
    DriversService,
    StaffService,
    UserService,
    VehiclesService,
 /* END PROVIDERS */

    // SECURITY
    AuthGuard,
    AuthenticationService,
  ],
  exports: []
})
export class CoreModule {
}
