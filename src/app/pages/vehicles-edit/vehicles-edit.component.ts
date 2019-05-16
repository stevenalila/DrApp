// Import Libraries
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

// Import Services
import { VehiclesService } from '../../services/vehicles.service';

import { Vehicles } from '../../domain/dr-app_db/vehicles';

// START - USED SERVICES
/**
* VehiclesService.create
*	@description CRUD ACTION create
*
* VehiclesService.get
*	@description CRUD ACTION get
*	@param ObjectId id Id 
*
* VehiclesService.update
*	@description CRUD ACTION update
*	@param ObjectId id Id
*
*/
// END - USED SERVICES

/**
 * This component allows to edit a  Vehicles
 */
@Component({
    selector: 'app-vehicles-edit',
    templateUrl: 'vehicles-edit.component.html',
    styleUrls: ['vehicles-edit.component.css']
})
export class VehiclesEditComponent implements OnInit {
    item: any = {};
    itemDoc: AngularFirestoreDocument<Vehicles>;
    isNew: Boolean = true;
    formValid: Boolean;



    constructor(
        private vehiclesService: VehiclesService,
        private route: ActivatedRoute,
        private location: Location) {
        // Init list
    }

    /**
     * Init
     */
    ngOnInit() {
        this.route.params.subscribe(param => {
            const id: string = param['id'];
            if (id !== 'new') {
                this.isNew = false;
                this.itemDoc = this.vehiclesService.get(id);
                this.itemDoc.valueChanges().subscribe(item => this.item = item);

            }
            // Get relations
        });
    }



    /**
     * Save Vehicles
     *
     * @param {boolean} formValid Form validity check
     * @param Vehicles item Vehicles to save
     */
    save(formValid: boolean): void {
        this.formValid = formValid;
        if (formValid) {
            if (this.isNew) {
                // Create
                this.vehiclesService.create(this.item);
                this.isNew = false;
            } else {
                // Update
                this.vehiclesService.update(this.itemDoc, this.item);
            }
            this.goBack();
        }
    }

    /**
     * Go Back
     */
    goBack(): void {
        this.location.back();
    }

}
