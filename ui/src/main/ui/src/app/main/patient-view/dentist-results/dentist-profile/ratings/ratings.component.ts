import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {DentistRating} from "./dentist.rating.model";
import {RatingsService} from "./ratings.service";
import {OnClickEvent, OnHoverRatingChangeEvent, OnRatingChangeEven} from "angular-star-rating";
import {CommonUtil} from "../../../../../util/common.util";

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

  constructor(private service: RatingsService) {
  }

  ngOnChanges() {
    this.userId = CommonUtil.getSessionUserId();
    this.inputName = this.itemId + '_rating';
    this.getRatings();
  }

  private getRatings(){
    this.service.getDentistRating(this.dentistId).subscribe(data => {
      this.ratings = data;
      console.log(this.ratings);
      this.isDataAvailable = true;
    });
  }

  onClick(rating:number):void{
    this.rating = rating;
    console.log(rating);
    this.ratingClick.emit({
      itemId: this.itemId,
      rating: rating
    });
  }

  onSubmit() {
    console.log('RATING: ' + this.rating + '  COMMENT: ' + this.comment + ' USER ID ' + this.userId);
    if(this.comment === "" || this.rating == 0){
      this.message = 'Please add both a COMMENT and RATE before submitting.';
      this.hideWarning = false;
    }else{
      this.service.canRate(this.userId, this.dentistId).subscribe( success => {
        if(!success){
          this.service.rateUser(this.userId, this.dentistId, this.rating, this.comment).subscribe(success => {
            if(success){
              this.getRatings();
              this.comment = "";
              this.hideWarning = true;
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

  isRatingAvailable(){
    return this.isDataAvailable;
  }

}
