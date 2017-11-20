import { Component, OnInit } from '@angular/core';
import { PrimaryTestService } from "./services/primary_test.service";
import { PrimaryTestModel } from "./models/primary_test.model";
import 'clarity-icons';
import 'clarity-icons/shapes/essential-shapes';
import 'clarity-icons/shapes/technology-shapes';

@Component({
  selector: 'primary_test',
  templateUrl: './primary_test.component.html',
  styleUrls: ['./primary_test.component.css'],
  providers: [PrimaryTestService]
})
export class PrimaryTestComponent implements OnInit {

  public testDatas: PrimaryTestModel[] = [];

  constructor(private service: PrimaryTestService) {
  }

  ngOnInit() {
    // this.service.getTestData()
    //     .subscribe(datas => this.testDatas = datas,
    //                error => console.log(error));
  }


}
