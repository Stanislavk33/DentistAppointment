import {Component, Input, OnChanges, OnInit} from '@angular/core';
import 'clarity-icons';
import 'clarity-icons/shapes/essential-shapes';
import 'clarity-icons/shapes/technology-shapes';
import {DentistRatingService} from "./dentist-rating.service";
import {DentistRating} from "./dentist-rating.model";

@Component({
  selector: 'dentist-rating',
  templateUrl: './dentist-rating.component.html',
  styleUrls: ['./dentist-rating.component.css'],
  providers: [DentistRatingService]
})
export class DentistRatingComponent implements OnChanges {
  @Input() myData;
  ratings: DentistRating[];
  isDataAvailable = false;
  user: string;
  constructor(private service: DentistRatingService) {
  }

  isRatingAvailable(){
    return this.isDataAvailable;
  }

  ngOnChanges() {
    this.service.getUserName().subscribe(user => {
      console.log(user);
      this.user = user;
    });
    this.service.getDentistRating(this.myData).subscribe(data => {
      console.log(data);
      console.log(data[0]);
      this.ratings = data;
      this.isDataAvailable = true;
    });
  }

}
