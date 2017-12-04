import {Component, Input, OnChanges, OnInit} from '@angular/core';
import 'clarity-icons';
import 'clarity-icons/shapes/essential-shapes';
import 'clarity-icons/shapes/technology-shapes';

@Component({
  selector: 'change-password',
  templateUrl: './change-password-component.html',
  styleUrls: ['./change-password-component.css']
})
export class ChangePasswordComponent implements OnChanges {
  @Input() myData;

  constructor() {
  }

  ngOnChanges() {

  }

}
