// Import Libraries
import { Component } from '@angular/core';
import { Location } from '@angular/common';

// Import Services

// START - USED SERVICES

// END - USED SERVICES

/**
 * SignUp Component
 */
@Component({
    selector: 'app-sign-up',
    templateUrl : './sign-up.component.html',
    styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

    constructor(
        private location: Location
        ) {

    }
}
