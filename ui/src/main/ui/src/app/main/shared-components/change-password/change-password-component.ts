import {Component, Input, OnChanges, OnInit} from '@angular/core';
import 'clarity-icons';
import 'clarity-icons/shapes/essential-shapes';
import 'clarity-icons/shapes/technology-shapes';
import {CommonUtil} from "../../../util/common.util";
import {EditService} from "../services/edit.service";

@Component({
  selector: 'change-password',
  templateUrl: './change-password-component.html',
  styleUrls: ['./change-password-component.css']
})
export class ChangePasswordComponent implements OnChanges, OnInit {

  private userEmail: string = '';
  private openFail: boolean = false;
  private failMessage: string = '';
  private openSuccess: boolean = false;
  constructor(private service: EditService) {
  }

  submit(old: string, newPass: string, newRepeat: string){
    if(newPass === newRepeat){
        this.service.changePassword(this.userEmail, old, newPass)
          .subscribe(success => {
            if(success){
              this.openSuccess = true;
              this.openFail = false;
            }else{
              this.openFail = true;
              this.openSuccess = false;
              this.failMessage = 'Old password is wrong';
            }
          },
          error => console.error(error));
    }else{
      this.openFail = true;
      this.openSuccess = false;
      this.failMessage = 'The passwords do not match.';
    }
  }

  ngOnChanges() {

  }

  ngOnInit() {
    this.userEmail = CommonUtil.getSessionUserEmail();
  }

}
