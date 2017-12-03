import {Component, ViewChild} from '@angular/core';
import {DayPilotCalendarComponent} from "daypilot-pro-angular";

@Component({
  selector: 'calendar-component',
  template: `
  <daypilot-calendar #calendar></daypilot-calendar>
  `,
  styles: [``]
})
export class CalendarComponent {
  @ViewChild("calendar") calendar : DayPilotCalendarComponent;


}
