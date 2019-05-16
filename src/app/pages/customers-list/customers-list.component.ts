import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Observable } from 'rxjs';

// Import Services
import { CustomersService } from '../../services/customers.service';
// Import Models
import { Customers } from '../../domain/dr-app_db/customers';

// START - USED SERVICES
/**
* CustomersService.delete
*	@description CRUD ACTION delete
*	@param ObjectId id Id
*
* CustomersService.list
*	@description CRUD ACTION list
*
*/
// END - USED SERVICES

/**
 * This component shows a list of Customers
 * @class CustomersListComponent
 */
@Component({
    selector: 'app-customers-list',
    templateUrl: './customers-list.component.html',
    styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent implements OnInit {
    list: Observable<any[]>;
    search: any = {};
    idSelected: string;
    constructor(
        private customersService: CustomersService,
    ) { }

    /**
     * Init
     */
    ngOnInit(): void {
        this.list = this.customersService.list();
    }

    /**
     * Select Customers to remove
     *
     * @param {string} id Id of the Customers to remove
     */
    selectId(id: string) {
        this.idSelected = id;
    }

    /**
     * Remove selected Customers
     */
    deleteItem() {
        this.customersService.remove(this.idSelected);
    }

}
