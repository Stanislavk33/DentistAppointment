import {Component, OnInit} from '@angular/core';
import {CommonUtil} from "../../../util/common.util";
import {AppointmentService} from "../../../services/appointment.service";
import {DentistAppointmentModel} from "../../../models/dentist.appointment.model";

@Component({
              moduleId: module.id,
              selector: 'edit-component',
              templateUrl: 'appointments.component.html',
              styleUrls: ["appointments.component.css"],
              providers: []
           })
export class DentistAppointmentsComponent implements OnInit {

   private appToCancel: number = 0;
   public cancelWarning: boolean = false;
   public userEmail;
   public currentComment: string = '';
   public pastAppointments: DentistAppointmentModel[] = [];
   public futureAppointments: DentistAppointmentModel[] = [];
   public currentAppointment: number = 0;
   public openComment: boolean = false;
   public comment: string = '';
   constructor(private appointmentsService: AppointmentService) {
   }

   private refreshPastAppointments(){
     this.appointmentsService.getDentistPastAppointments(CommonUtil.getSessionUserId())
       .subscribe( data => {
           this.pastAppointments = data;
           this.openComment = false;
           console.log(this.pastAppointments);
         },
         err => console.log(err));

     this.appointmentsService.getDentistFutureAppointments(CommonUtil.getSessionUserId())
       .subscribe( data => {
           this.futureAppointments = data;
           this.openComment = false;
           console.log(this.futureAppointments);
         },
         err => console.log(err));
   }

   openCancelDialog(id){
     this.appToCancel = id;
     this.cancelWarning = true;
   }

  cancelAppointment(){
     this.appointmentsService.cancelAppointment(this.appToCancel).subscribe( success => {
       if(success){
         this.cancelWarning = false;
         this.refreshPastAppointments();
       }
     }, err => console.log(err));
   }

  addComment(id, comment){
     this.currentAppointment = id;
     this.currentComment = comment;
     this.openComment = true;
  }

  onSubmit(){
      this.appointmentsService.addAppointmentComment(this.currentAppointment, this.comment).subscribe( success => {
        if(success){
          this.refreshPastAppointments();
          this.comment = '';
          console.log('success');
        }
      }, err => console.log(err));
  }

   ngOnInit() {
     this.userEmail = CommonUtil.getSessionUserEmail();
     this.refreshPastAppointments();
   }
}
