import { Component, OnInit } from '@angular/core';
import 'clarity-icons';
import 'clarity-icons/shapes/essential-shapes';
import 'clarity-icons/shapes/technology-shapes';
import {DentistRatingService} from "./dentist-rating.service";

@Component({
  selector: 'dentist-rating',
  templateUrl: './dentist-rating.component.html',
  styleUrls: ['./dentist-rating.component.css'],
  providers: [DentistRatingService]
})
export class DentistRatingComponent implements OnInit {

  constructor(private service: DentistRatingService) {
  }

  ngOnInit() {
  }

}
