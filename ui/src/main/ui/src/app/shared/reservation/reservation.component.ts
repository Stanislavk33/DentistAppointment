/*import { Component, OnInit } from '@angular/core';
import 'clarity-icons';
import 'clarity-icons/shapes/essential-shapes';
import 'clarity-icons/shapes/technology-shapes';
import {Patient} from "../patient/patient.model";
import {Dentist} from "./dentist.model";
import {DentistService} from "./dentist.service";

@Component({
  selector: 'dentists',
  templateUrl: './dentist.component.html',
  styleUrls: ['./dentist.component.css'],
  providers: [DentistService]
})
export class DentistComponent implements OnInit {

  public dentists: Dentist[] = [];
  public currentDentist;

  constructor(private service: DentistService) {
  }

  selected(city:string){
    this.service.getDentistsByCity(city).subscribe(data => this.dentists = data,
      error => console.log(error));
  }

  searchByName(name:string){
    this.service.getDentistsByName(name).subscribe(data => this.dentists = data,
      error => console.log(error));
  }

  viewProfile(dentist, condition){
    this.currentDentist = dentist;
  }
  ngOnInit() { }

}*/
