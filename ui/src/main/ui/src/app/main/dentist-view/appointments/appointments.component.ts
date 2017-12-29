import {Component, OnInit} from '@angular/core';
import {CommonUtil} from "../../../util/common.util";
import {UsersService} from "../../../services/users.service";
import {PastAppointmentModel} from "../../../models/past.appointment.model";

@Component({
              moduleId: module.id,
              selector: 'edit-component',
              templateUrl: 'appointments.component.html',
              styleUrls: ["appointments.component.css"],
              providers: []
           })
export class DentistAppointmentsComponent implements OnInit {
   public userEmail;
   public pastAppointments: PastAppointmentModel[] = [];
   public currentAppointment: number = 0;
   public openComment: boolean = false;
   public comment: string = '';
   constructor(private usersService: UsersService) {
   }

   private refreshPastAppointments(){
     this.usersService.getPastAppointments(CommonUtil.getSessionUserId())
       .subscribe( data => {
           this.pastAppointments = data;
           this.openComment = false;
           console.log(this.pastAppointments);
         },
         err => console.log(err));
   }

  addComment(id){
     this.currentAppointment = id;
     this.openComment = true;
  }

  onSubmit(){
      this.usersService.addAppointmentComment(this.currentAppointment, this.comment).subscribe( success => {
        if(success){
          this.refreshPastAppointments();
          console.log('success');
        }
      }, err => console.log(err));
  }

   ngOnInit() {
     this.userEmail = CommonUtil.getSessionUserEmail();
     this.refreshPastAppointments();
   }
}
