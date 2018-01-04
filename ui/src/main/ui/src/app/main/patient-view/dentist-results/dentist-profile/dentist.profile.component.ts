import { Component, OnInit } from '@angular/core';
import 'clarity-icons';
import 'clarity-icons/shapes/essential-shapes';
import 'clarity-icons/shapes/technology-shapes';
import {ActivatedRoute, Router} from "@angular/router";
import {UserModel} from "../../../../models/user.model";
import {DentistCommonService} from "../services/dentist.common.service";
import {CommonUtil} from "../../../../util/common.util";

@Component({
  selector: 'dentist-profile',
  templateUrl: './dentist.profile.component.html',
  styleUrls: ['./dentist.profile.component.css']
})
export class DentistProfileComponent implements OnInit {
  private id: number = 0;
  private dentist: UserModel;
  private  isDataAvailable = false;
  private avgRating: number = 0.;

  constructor(private _Activatedroute:ActivatedRoute,
              private dentistService: DentistCommonService){
  }

  ngOnInit() {
    this.id = this._Activatedroute.snapshot.params['id'];
    this.dentistService.getUserInfo(this.id)
      .subscribe(data => {
        this.dentist = data;
        this.isDataAvailable = true;},
      err => console.log(err));
    this.dentistService.getAvgRating(this.id)
      .subscribe(rating => {
        if(rating != 0){
          this.avgRating = rating;
        }
      },
        err => console.log(err));
  }
}
