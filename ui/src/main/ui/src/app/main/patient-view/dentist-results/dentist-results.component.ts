import {Component, OnInit} from '@angular/core';
import {CommonUtil} from "../../../util/common.util";
import {DentistModel} from "../../../models/dentist.model";
import {UsersService} from "../../../services/users.service";

@Component({
              moduleId: module.id,
              selector: 'dentist-results',
              templateUrl: 'dentist-results.component.html',
              styleUrls: ["dentist-results.component.css"],
              providers: []
           })
export class DentistResultsComponent implements OnInit {
  public userEmail;
  public dentists: DentistModel[] = [];
  public currentDentist;
  public city;
  public rating2;
  public type;

  public currentRating = 'Sort By Rating';
  public currentCity = 'Select City';
  public currentType = 'Type';

   constructor(private usersService: UsersService) {
   }

   ngOnInit() {
     this.userEmail = CommonUtil.getSessionUserEmail();
     this.usersService.getDentists()
       .subscribe(result => this.dentists = result.users as DentistModel[],
         error => console.error(error));
   }
}
