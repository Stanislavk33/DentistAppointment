import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {DentistRating} from "./dentist.rating.model";
import {OnClickEvent, OnHoverRatingChangeEvent, OnRatingChangeEven} from "angular-star-rating";
import {CommonUtil} from "../../../../../util/common.util";
import {RatingsService} from "../../../../../services/ratings.service";

@Component({
  selector: 'ratings-component',
  templateUrl: 'ratings.component.html',
  styleUrls: ["ratings.component.css"],
  providers: [RatingsService]
})
export class RatingsComponent implements OnChanges {
  @Input() dentistId : number;
  ratings: DentistRating[];
  isDataAvailable = false;
  userId: number;
  @Input() rating: number = 0;
  @Input() itemId: number;
  @Output() ratingClick:EventEmitter<any> = new EventEmitter<any>();
  inputName:string;
  comment: string = "";
  hideWarning: boolean = true;
  message = "";
  public currentRate: DentistRating;

  constructor(private service: RatingsService) {
  }

  ngOnChanges() {
    this.userId = CommonUtil.getSessionUserId();
    this.inputName = this.itemId + '_rating';
    this.getRatings();
    if(this.userId != 0){
      this.service.getPatientRatingForDentist(this.dentistId,this.userId)
        .subscribe( data => {
          if(data!=null){
            this.currentRate = data;
            this.onClick(this.currentRate.rate);
            this.comment = this.currentRate.comment;
          }
          },
          err => console.log(err));
    }
  }

  private getRatings(){
    this.service.getDentistRating(this.dentistId).subscribe(data => {
      this.ratings = data;
      this.isDataAvailable = true;
    });
  }

  onClick(rating:number):void{
    this.rating = rating;
    this.ratingClick.emit({
      itemId: this.itemId,
      rating: rating
    });
  }

  onSubmit() {
    if(this.comment === "" || this.rating == 0){
      this.message = 'Please add both a COMMENT and RATE before submitting.';
      this.hideWarning = false;
    }else{
      this.service.rateUser(this.userId, this.dentistId, this.rating, this.comment).subscribe(success => {
        if(success){
          this.getRatings();
          this.comment = "";
        }
      });
    }
  }

  closeWarning() {
    this.hideWarning= !this.hideWarning;
  }

  isRatingAvailable(){
    return this.isDataAvailable;
  }

}
