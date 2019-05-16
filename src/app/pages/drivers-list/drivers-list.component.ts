import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Observable } from 'rxjs';

// Import Services
import { DriversService } from '../../services/drivers.service';
// Import Models
import { Drivers } from '../../domain/dr-app_db/drivers';

// START - USED SERVICES
/**
* DriversService.delete
*	@description CRUD ACTION delete
*	@param ObjectId id Id
*
* DriversService.list
*	@description CRUD ACTION list
*
*/
// END - USED SERVICES

/**
 * This component shows a list of Drivers
 * @class DriversListComponent
 */
@Component({
    selector: 'app-drivers-list',
    templateUrl: './drivers-list.component.html',
    styleUrls: ['./drivers-list.component.css']
})
export class DriversListComponent implements OnInit {
    list: Observable<any[]>;
    search: any = {};
    idSelected: string;
    constructor(
        private driversService: DriversService,
    ) { }

    /**
     * Init
     */
    ngOnInit(): void {
        this.list = this.driversService.list();
    }

    /**
     * Select Drivers to remove
     *
     * @param {string} id Id of the Drivers to remove
     */
    selectId(id: string) {
        this.idSelected = id;
    }

    /**
     * Remove selected Drivers
     */
    deleteItem() {
        this.driversService.remove(this.idSelected);
    }

}
