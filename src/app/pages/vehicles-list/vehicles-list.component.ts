import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Observable } from 'rxjs';

// Import Services
import { VehiclesService } from '../../services/vehicles.service';
// Import Models
import { Vehicles } from '../../domain/dr-app_db/vehicles';

// START - USED SERVICES
/**
* VehiclesService.delete
*	@description CRUD ACTION delete
*	@param ObjectId id Id
*
* VehiclesService.list
*	@description CRUD ACTION list
*
*/
// END - USED SERVICES

/**
 * This component shows a list of Vehicles
 * @class VehiclesListComponent
 */
@Component({
    selector: 'app-vehicles-list',
    templateUrl: './vehicles-list.component.html',
    styleUrls: ['./vehicles-list.component.css']
})
export class VehiclesListComponent implements OnInit {
    list: Observable<any[]>;
    search: any = {};
    idSelected: string;
    constructor(
        private vehiclesService: VehiclesService,
    ) { }

    /**
     * Init
     */
    ngOnInit(): void {
        this.list = this.vehiclesService.list();
    }

    /**
     * Select Vehicles to remove
     *
     * @param {string} id Id of the Vehicles to remove
     */
    selectId(id: string) {
        this.idSelected = id;
    }

    /**
     * Remove selected Vehicles
     */
    deleteItem() {
        this.vehiclesService.remove(this.idSelected);
    }

}
