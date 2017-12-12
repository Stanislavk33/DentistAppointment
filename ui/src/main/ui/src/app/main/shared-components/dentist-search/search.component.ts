import { Component, OnInit } from '@angular/core';
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

  //public dentists: Dentist[] = [];
  public currentDentist;
  public name = "";
  public city = "";
  public rating2 = "";
  public type = "";
  public uid;
  public selectedRating = 'Descending';
  public selectedCity = 'Select City';
  public selectedType = 'Dentist Type';

  constructor(private service: SearchService, private router: Router) {
  }

/*  public performSearch(){
    this.service.getDentists(this.name, this.city, this.type, this.rating2).subscribe(data => this.dentists = data,
      error => console.log(error));
  }

  setCity(city:string){
    if(city){
      this.selectedCity = city;
      this.city = city;
      this.performSearch();
    }else{
      this.selectedCity = 'Select city';
      this.city = "";
      this.performSearch();
    }
  }

  setNameAndSearch(name:string){
    this.name = name;
    this.performSearch();
  }

  setRating(rating:any){
    if(rating){
      this.selectedRating = rating;
      this.rating2 = rating;
      this.performSearch();
    }else{
      this.rating2 = "";
      this.selectedRating = 'Sort by rating';
      this.performSearch();
    }
  }

  setType(type:string){
    if(type){
      this.selectedType = type;
      this.type = type;
      this.performSearch();
    }else{
      this.type = "";
      this.selectedType = 'Dentist Type';
      this.performSearch();
    }
  }

  update() {
    this.service.getDentistsByRating('Descending').subscribe(data => this.dentists = data,
      error => console.log(error));
    console.log(this.dentists)
  }*/
  ngOnInit() {
  // this.update();
  }
}
