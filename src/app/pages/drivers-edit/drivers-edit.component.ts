// Import Libraries
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

// Import Services
import { DriversService } from '../../services/drivers.service';

import { Drivers } from '../../domain/dr-app_db/drivers';

// START - USED SERVICES
/**
* DriversService.create
*	@description CRUD ACTION create
*
* DriversService.get
*	@description CRUD ACTION get
*	@param ObjectId id Id 
*
* DriversService.update
*	@description CRUD ACTION update
*	@param ObjectId id Id
*
*/
// END - USED SERVICES

/**
 * This component allows to edit a  Drivers
 */
@Component({
    selector: 'app-drivers-edit',
    templateUrl: 'drivers-edit.component.html',
    styleUrls: ['drivers-edit.component.css']
})
export class DriversEditComponent implements OnInit {
    item: any = {};
    itemDoc: AngularFirestoreDocument<Drivers>;
    isNew: Boolean = true;
    formValid: Boolean;



    constructor(
        private driversService: DriversService,
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
                this.itemDoc = this.driversService.get(id);
                this.itemDoc.valueChanges().subscribe(item => this.item = item);

            }
            // Get relations
        });
    }



    /**
     * Save Drivers
     *
     * @param {boolean} formValid Form validity check
     * @param Drivers item Drivers to save
     */
    save(formValid: boolean): void {
        this.formValid = formValid;
        if (formValid) {
            if (this.isNew) {
                // Create
                this.driversService.create(this.item);
                this.isNew = false;
            } else {
                // Update
                this.driversService.update(this.itemDoc, this.item);
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
