import { Component, OnInit } from '@angular/core';
import {Dentist} from "./dentist.model";
import {SearchService} from "./search.service";
import {Router} from "@angular/router";
import {isNullOrUndefined} from "util";

@Component({
  selector: 'search-component',
  templateUrl: 'search.component.html',
  styleUrls: ["search.component.css"],
  providers: []
})
export class SearchComponent implements OnInit {

  public dentists: Dentist[] = [];
  public currentDentist;
  public city;
  public rating2;
  public type;
  public uid;
  public currentRating = 'Sort By Rating';
  public currentCity = 'Select City';
  public currentType = 'Type';

  constructor(private service: SearchService, private router: Router) {
  }

  selected(city:string){
    this.city = city;
    this.service.getDentistsByCity(city).subscribe(data => this.dentists = data,
      error => console.log(error));
    this.currentCity = city;
  }

  searchByName(name:string){
    var input: {[k: string]: any} = {};
    //console.log(this.city + ' ' + this.rating2 + ' ' + this.type + ' ' + name);
    if(!isNullOrUndefined(this.city)){
      input.city = this.city;
    }
    if(!isNullOrUndefined(this.rating2)){
      input.rating = this.rating2;
    }
    if(!isNullOrUndefined(this.type)){
      input.type = this.type;
    }
    if(!isNullOrUndefined(name)){
      input.name = name;
    }

    for (var propName in input) {
      if (input[propName] === null || input[propName] === undefined || input[propName] === '') {
        delete input[propName];
      }
    }
    console.log(input);
    console.log(Object.keys(input).length);
    let size = Object.keys(input).length;
    if(size == 1){
      if(input.type){

      }
    }
    this.service.getDentistsByName(name).subscribe(data => this.dentists = data,
      error => console.log(error));
  }

  rating(rating:string){
    this.service.getDentistsByRating(rating).subscribe(data => this.dentists = data,
      error => console.log(error));
    console.log(this.dentists);
    this.rating2 = rating;
    this.currentRating = rating;
  }

  typeDentist(type:string){
    this.type = type;
    this.service.getDentistsByType(type).subscribe(data => this.dentists = data,
      error => console.log(error));
    this.currentType = type;
  }

  update() {
    this.service.getDentistsByRating('desc').subscribe(data => this.dentists = data,
      error => console.log(error));
    this.service.getUserId().subscribe(data => this.uid, err => console.log(err));
    console.log(this.uid);
  }
  ngOnInit() {
   this.update();
  }
}
