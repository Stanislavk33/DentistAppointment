import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CommonUtil} from "../../../util/common.util";
import {UsersService} from "../../../services/users.service";
import {UserModel} from "../../../models/user.model";
import {DentistModel} from "../../../models/dentist.model";
import {PatientResultModel} from "./patient.result.model";
import {RatingsService} from "../../patient-view/dentist-results/dentist-profile/ratings/ratings.service";
import {Comparator, StringFilter} from "clarity-angular";

class VisitsComparator implements Comparator<PatientResultModel> {
  compare(a: PatientResultModel, b: PatientResultModel) {
    return a.visits - b.visits;
  }
}

class RatingsComparator implements Comparator<PatientResultModel> {
  compare(a: PatientResultModel, b: PatientResultModel) {
    return a.rating - b.rating;
  }
}

class FirstNameFilter implements StringFilter<PatientResultModel> {
  accepts(user: PatientResultModel, search: string):boolean {
    return "" + user.id == search
      || user.firstName.toLowerCase().indexOf(search) >= 0;
  }
}

class LastNameFilter implements StringFilter<PatientResultModel> {
  accepts(user: PatientResultModel, search: string):boolean {
    return "" + user.id == search
      || user.lastName.toLowerCase().indexOf(search) >= 0;
  }
}

@Component({
              moduleId: module.id,
              selector: 'edit-component',
              templateUrl: 'patients.component.html',
              styleUrls: ["patients.component.css"],
              providers: []
           })
export class PatientsComponent implements OnInit {
  private visitsComparator = new VisitsComparator();
  private ratingsComparator = new RatingsComparator();
  private firstNameFilter = new FirstNameFilter();
  private lastNameFilter = new LastNameFilter();

  private searchCriteria: string = '';
  @Input() patientId : number;
   public userId: number = 0;
   public patients: PatientResultModel[] = [];
   public openRate: boolean = false;
   public currentPatientId: number = 0;
  @Input() rating: number = 0;
  @Input() itemId: number;
  @Output() ratingClick:EventEmitter<any> = new EventEmitter<any>();
  inputName:string;
  comment: string = "";
  hideWarning: boolean = true;
  message = "";

  constructor(private usersService: UsersService,
             private ratingsService: RatingsService) {
  }

  private refreshPatients(){
    this.usersService.getPatientsByName(this.userId)
      .subscribe( data => {
        this.patients = data;
        console.log(data);
        },
          err => console.log(err));
  }

  addToBlacklist(id) {

  }

  onClick(rating:number):void{
    this.rating = rating;
    console.log(rating);
    this.ratingClick.emit({
      itemId: this.itemId,
      rating: rating
    });
  }

  ratePatient(patientId){
     this.currentPatientId = patientId;
     this.openRate = true;
  }

  onSubmit() {
    if(this.comment === "" || this.rating == 0){
      this.message = 'Please add both a COMMENT and RATE before submitting.';
      this.hideWarning = false;
    }else{
      this.ratingsService.canRate(this.userId, this.currentPatientId).subscribe( success => {
        if(!success){
          this.ratingsService.rateUser(this.userId, this.currentPatientId, this.rating, this.comment).subscribe(success => {
            if(success){
              this.comment = "";
              this.hideWarning = true;
              this.refreshPatients();
              this.openRate = false;
            }
          });
        }else{
          this.comment = '';
          this.message = 'You can rate only once.';
          this.hideWarning = false;
        }
      });
    }
  }

  closeWarning() {
    this.hideWarning= !this.hideWarning;
  }


   ngOnInit() {
     this.userId = CommonUtil.getSessionUserId();
     this.refreshPatients();
   }
}
