import { Component, OnInit } from '@angular/core';
import 'clarity-icons';
import 'clarity-icons/shapes/essential-shapes';
import 'clarity-icons/shapes/technology-shapes';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'dentist-profile',
  templateUrl: './dentist-profile.component.html',
  styleUrls: ['./dentist-profile.component.css']
})
export class DentistProfileComponent implements OnInit {
  email;
  public isDataAvailable = false;
  constructor(private _Activatedroute:ActivatedRoute,
              private router: Router){
  }
  isAvailable(){
    return this.isDataAvailable;
  }

  ngOnInit() {
    this.email = this._Activatedroute.snapshot.params['id'];
  }
}
