// Import Libraries
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

// Import Services
import { StaffService } from '../../services/staff.service';

import { Staff } from '../../domain/dr-app_db/staff';

// START - USED SERVICES
/**
* StaffService.create
*	@description CRUD ACTION create
*
* StaffService.get
*	@description CRUD ACTION get
*	@param ObjectId id Id 
*
* StaffService.update
*	@description CRUD ACTION update
*	@param ObjectId id Id
*
*/
// END - USED SERVICES

/**
 * This component allows to edit a  Staff
 */
@Component({
    selector: 'app-staff-edit',
    templateUrl: 'staff-edit.component.html',
    styleUrls: ['staff-edit.component.css']
})
export class StaffEditComponent implements OnInit {
    item: any = {};
    itemDoc: AngularFirestoreDocument<Staff>;
    isNew: Boolean = true;
    formValid: Boolean;



    constructor(
        private staffService: StaffService,
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
                this.itemDoc = this.staffService.get(id);
                this.itemDoc.valueChanges().subscribe(item => this.item = item);

            }
            // Get relations
        });
    }



    /**
     * Save Staff
     *
     * @param {boolean} formValid Form validity check
     * @param Staff item Staff to save
     */
    save(formValid: boolean): void {
        this.formValid = formValid;
        if (formValid) {
            if (this.isNew) {
                // Create
                this.staffService.create(this.item);
                this.isNew = false;
            } else {
                // Update
                this.staffService.update(this.itemDoc, this.item);
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
