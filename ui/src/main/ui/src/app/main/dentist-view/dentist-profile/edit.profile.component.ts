<<<<<<< HEAD



import {Component, OnInit} from "@angular/core";
import {EditDentistProfileService} from "../../shared-components/services/edit.dentist.service";
import {CommonUtil} from "../../../util/common.util";
import {EditDentistProfileModel} from "../../../services/model/edit.dentist.profile.model";
import {DentistModel} from "../../../models/dentist.model";
import {Constants} from "../../../models/constants";

@Component({
  moduleId: module.id,
  selector: 'edit-component',
  templateUrl: 'edit.profile.component.html',
  styleUrls: ["edit.profile.component.css"],
  providers: []
})
export class EditDentistProfileComponent implements OnInit {
 private model: DentistModel = new DentistModel();
 private constants = Constants;
  private userRole;
  public UserId: number= 0;
  private openFail: boolean = false;
  private failMessage: string = '';
  private openSuccess: boolean = false;
  constructor(private service: EditDentistProfileService) {
  }

  submit(email: string,firstName:string,lastName:string,dentistType:string,city:string){

    this.service.editDentistProfile(email,this.UserId,firstName,lastName,dentistType,city)
      .subscribe(success =>
        {
          if(success){
            this.openSuccess = true;//console log true
            this.openFail = false;
          }else{
            this.openFail = true;
            this.openSuccess = false;

          }
        },

        error => console.error(error));

  }





  ngOnChanges() {

  }
  ngOnInit() {
    this.UserId = CommonUtil.getSessionUserId();
    console.log(this.UserId);
  }
=======
import {Component, OnInit} from '@angular/core';
import {CommonUtil} from "../../../util/common.util";

@Component({
              moduleId: module.id,
              selector: 'edit-component',
              templateUrl: 'edit.profile.component.html',
              styleUrls: ["edit.profile.component.css"],
              providers: []
           })
export class EditDentistProfileComponent implements OnInit {
   public userEmail;
   constructor() {
   }

   ngOnInit() {
     this.userEmail = CommonUtil.getSessionUserEmail();
   }
>>>>>>> kali-brach-new
}
