import {Component, OnInit} from '@angular/core';
import {CommonUtil} from "../../../util/common.util";
import {AppointmentService} from "../../../services/appointment.service";
import {DentistAppointmentModel} from "../../../models/dentist.appointment.model";
import {Comparator, StringFilter} from "clarity-angular";

class DateComparator implements Comparator<DentistAppointmentModel> {
  compare(a: DentistAppointmentModel, b: DentistAppointmentModel) {
    return +new Date(b.date) - +new Date(a.date);
  }
}

class NameFilter implements StringFilter<DentistAppointmentModel> {
  accepts(app: DentistAppointmentModel, search: string):boolean {
    return "" + app.id == search
      || (app.patientFirstName + " " + app.patientLastName).toLowerCase().indexOf(search) >= 0;
  }
}

@Component({
              moduleId: module.id,
              selector: 'edit-component',
              templateUrl: 'appointments.component.html',
              styleUrls: ["appointments.component.css"],
              providers: []
           })
export class DentistAppointmentsComponent implements OnInit {
   private nameFilter = new NameFilter();
   private dateComparator = new DateComparator();
   private appToCancel: number = 0;
   public cancelWarning: boolean = false;
   public userId: number = 0;
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

   hasComment(comment){
     return comment!='';
   }

  cancelAppointment(){
     this.appointmentsService.cancelAppointment(this.appToCancel, this.userId).subscribe( success => {
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
          this.openComment = false;
          this.comment = '';
          console.log('success');
        }
      }, err => console.log(err));
  }

   ngOnInit() {
     this.userId = CommonUtil.getSessionUserId();
     this.refreshPastAppointments();
   }
}
