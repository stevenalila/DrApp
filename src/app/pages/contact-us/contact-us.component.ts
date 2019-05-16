// Import Libraries
import { Component } from '@angular/core';
import { Location } from '@angular/common';

// Import Services

// START - USED SERVICES

// END - USED SERVICES

/**
 * ContactUs Component
 */
@Component({
    selector: 'app-contact-us',
    templateUrl : './contact-us.component.html',
    styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {

    constructor(
        private location: Location
        ) {

    }
}
