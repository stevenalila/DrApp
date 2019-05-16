// Import Libraries
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

// Import Services
import { CustomersService } from '../../services/customers.service';

import { Customers } from '../../domain/dr-app_db/customers';

// START - USED SERVICES
/**
* CustomersService.create
*	@description CRUD ACTION create
*
* CustomersService.get
*	@description CRUD ACTION get
*	@param ObjectId id Id 
*
* CustomersService.update
*	@description CRUD ACTION update
*	@param ObjectId id Id
*
*/
// END - USED SERVICES

/**
 * This component allows to edit a  Customers
 */
@Component({
    selector: 'app-customers-edit',
    templateUrl: 'customers-edit.component.html',
    styleUrls: ['customers-edit.component.css']
})
export class CustomersEditComponent implements OnInit {
    item: any = {};
    itemDoc: AngularFirestoreDocument<Customers>;
    isNew: Boolean = true;
    formValid: Boolean;



    constructor(
        private customersService: CustomersService,
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
                this.itemDoc = this.customersService.get(id);
                this.itemDoc.valueChanges().subscribe(item => this.item = item);

            }
            // Get relations
        });
    }



    /**
     * Save Customers
     *
     * @param {boolean} formValid Form validity check
     * @param Customers item Customers to save
     */
    save(formValid: boolean): void {
        this.formValid = formValid;
        if (formValid) {
            if (this.isNew) {
                // Create
                this.customersService.create(this.item);
                this.isNew = false;
            } else {
                // Update
                this.customersService.update(this.itemDoc, this.item);
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
