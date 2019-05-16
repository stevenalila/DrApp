import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Observable } from 'rxjs';

// Import Services
import { StaffService } from '../../services/staff.service';
// Import Models
import { Staff } from '../../domain/dr-app_db/staff';

// START - USED SERVICES
/**
* StaffService.delete
*	@description CRUD ACTION delete
*	@param ObjectId id Id
*
* StaffService.list
*	@description CRUD ACTION list
*
*/
// END - USED SERVICES

/**
 * This component shows a list of Staff
 * @class StaffListComponent
 */
@Component({
    selector: 'app-staff-list',
    templateUrl: './staff-list.component.html',
    styleUrls: ['./staff-list.component.css']
})
export class StaffListComponent implements OnInit {
    list: Observable<any[]>;
    search: any = {};
    idSelected: string;
    constructor(
        private staffService: StaffService,
    ) { }

    /**
     * Init
     */
    ngOnInit(): void {
        this.list = this.staffService.list();
    }

    /**
     * Select Staff to remove
     *
     * @param {string} id Id of the Staff to remove
     */
    selectId(id: string) {
        this.idSelected = id;
    }

    /**
     * Remove selected Staff
     */
    deleteItem() {
        this.staffService.remove(this.idSelected);
    }

}
