import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CommonUtil} from "../../../util/common.util";
import {UsersService} from "../../../services/users.service";
import {UserModel} from "../../../models/user.model";
import {DentistModel} from "../../../models/dentist.model";
import {PatientResultModel} from "./patient.result.model";
import {Comparator, StringFilter} from "clarity-angular";
import {DentistAppointmentModel} from "../../../models/dentist.appointment.model";
import {AppointmentService} from "../../../services/appointment.service";
import {RatingsService} from "../../../services/ratings.service";
import {DentistRating} from "../../patient-view/dentist-results/dentist-profile/ratings/dentist.rating.model";

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

class DateComparator implements Comparator<DentistAppointmentModel> {
  compare(a: DentistAppointmentModel, b: DentistAppointmentModel) {
    return +new Date(b.date) - +new Date(a.date);
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
  private dateComparator = new DateComparator();

  private searchCriteria: string = '';
  @Input() patientId : number;
   public userId: number = 0;
   public patients: PatientResultModel[] = [];
   public openRate: boolean = false;
   public currentPatientId: number = 0;
   public currentRate: DentistRating;
   public openHistory: boolean = false;
   public commonAppointments: DentistAppointmentModel[] = [];
  @Input() rating: number = 0;
  @Input() itemId: number;
  @Output() ratingClick:EventEmitter<any> = new EventEmitter<any>();
  inputName:string;
  comment: string = "";
  hideWarning: boolean = true;
  message = "";
  public openComment: boolean = false;
  public currentComment: string = '';

  constructor(private usersService: UsersService,
              private ratingsService: RatingsService,
              private appointmentService: AppointmentService) {
  }

  private refreshPatients(){
    this.usersService.getPatientsByName(this.userId)
      .subscribe( data => {
        this.patients = data;
        },
          err => console.log(err));
  }

  addToBlacklist(id) {

  }

  seeHistory(id:number){
    this.appointmentService.getCommonAppointments(this.userId, id).subscribe( data => {
        this.commonAppointments = data;
        this.openHistory = true;
      },
      err => console.log(err));;
  }

  onClick(rating:number){
    this.rating = rating;
    this.ratingClick.emit({
      itemId: this.itemId,
      rating: rating
    });
  }

  ratePatient(patient: PatientResultModel){
     this.currentPatientId = patient.id;
     this.openRate = true;
     this.ratingsService.getDentistRatingForPatient(this.userId,patient.id)
       .subscribe( data => {
         this.currentRate = data;
         this.onClick(this.currentRate.rate);
         this.comment = this.currentRate.comment;
         },
         err => console.log(err));
  }

  onSubmit() {
    if(this.comment === "" || this.rating == 0){
      this.message = 'Please add both a COMMENT and RATE before submitting.';
      this.hideWarning = false;
    }else{
      this.ratingsService.rateUser(this.userId, this.currentPatientId, this.rating, this.comment).subscribe(success => {
        if(success){
          this.comment = "";
          this.hideWarning = true;
          this.refreshPatients();
          this.openRate = false;
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
