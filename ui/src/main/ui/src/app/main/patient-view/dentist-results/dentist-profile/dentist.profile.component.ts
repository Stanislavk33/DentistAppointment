import { Component, OnInit } from '@angular/core';
import 'clarity-icons';
import 'clarity-icons/shapes/essential-shapes';
import 'clarity-icons/shapes/technology-shapes';
import {ActivatedRoute, Router} from "@angular/router";
import {UserModel} from "../../../../models/user.model";
import {CommonService} from "../../../../services/common.service";

@Component({
  selector: 'dentist-profile',
  templateUrl: './dentist.profile.component.html',
  styleUrls: ['./dentist.profile.component.css']
})
export class DentistProfileComponent implements OnInit {
  private id: number = 0;
  private dentist: UserModel;
  private  isDataAvailable = false;
  constructor(private _Activatedroute:ActivatedRoute,
              private router: Router,
              private commonService: CommonService){
  }

  ngOnInit() {
    this.id = this._Activatedroute.snapshot.params['id'];
    this.commonService.getUserInfo(this.id)
      .subscribe(data => {
        this.dentist = data;
        this.isDataAvailable = true;},
      err => console.log(err));
  }
}
