import { Component, OnInit } from '@angular/core';
import 'clarity-icons';
import 'clarity-icons/shapes/essential-shapes';
import 'clarity-icons/shapes/technology-shapes';
import {DentistProfileService} from "./dentist-profile.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Dentist} from "../search/dentist.model";

@Component({
  selector: 'dentist-profile',
  templateUrl: './dentist-profile.component.html',
  styleUrls: ['./dentist-profile.component.css'],
  providers: [DentistProfileService]
})
export class DentistProfileComponent implements OnInit {
  id;
  public dentist:Dentist[];
  public isDataAvailable = false;
  constructor(private service: DentistProfileService, private _Activatedroute:ActivatedRoute,
              private router: Router){
  }

  isAvailable(){
    return this.isDataAvailable;
  }

  ngOnInit() {
    this.id = this._Activatedroute.snapshot.params['id'];
    this.service.getDentist(this.id).subscribe(data => {
      console.log(data);
      console.log(data[0]);
      this.dentist = data;
      console.log(this.dentist);
      this.isDataAvailable = true;
    });
  }
}
