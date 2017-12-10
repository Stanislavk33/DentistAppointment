import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {DentistRating} from "./dentist-rating.model";
import {RatingsService} from "./ratings.service";

@Component({
  selector: 'ratings-component',
  templateUrl: 'ratings.component.html',
  styleUrls: ["ratings.component.css"],
  providers: [RatingsService]
})
export class RatingsComponent implements OnChanges {
  @Input() dentistId;
  ratings: DentistRating[];
  isDataAvailable = false;
  user: string;
  constructor(private service: RatingsService) {
  }

  isRatingAvailable(){
    return this.isDataAvailable;
  }

  ngOnChanges() {
    this.service.getDentistRating(this.dentistId).subscribe(data => {
      this.ratings = data;
      console.log(this.ratings);
      this.isDataAvailable = true;
    });
  }
}
