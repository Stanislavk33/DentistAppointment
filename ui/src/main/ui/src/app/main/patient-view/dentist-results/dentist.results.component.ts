import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UserModel} from "../../../models/user.model";
import {Comparator} from "clarity-angular";
import {DentistCommonService} from "./services/dentist.common.service";
import {Router} from "@angular/router";
import {CommonUtil} from "../../../util/common.util";

class DentistComparator implements Comparator<UserModel> {
  compare(a: UserModel, b: UserModel) {
    return a.rating - b.rating;
  }
}

@Component({
              moduleId: module.id,
              selector: 'dentist-results',
              templateUrl: 'dentist.results.component.html',
              styleUrls: ["dentist.results.component.css"],
              providers: []
           })
export class DentistResultsComponent implements OnInit {
  private dentistComparator = new DentistComparator();
  public dentists: UserModel[] = [];
  public city: string = '';
  private name: string = '';
  private type: string = '';
  private currentCity = 'Select City';
  private currentType = 'Select Type';
  private hideWarning: boolean = false;

   constructor(private dentistService: DentistCommonService,
               private router: Router) {
   }

  public performSearch(){
    this.dentistService.getFilteredDentists(this.name, this.city, this.type)
            .subscribe(data => this.dentists = data,
            error => console.error(error));
  }

  openProfile(id: number){
    if(CommonUtil.getSessionUserId()===0){
      this.router.navigate(["home/result/", id]);
    }else{
      this.router.navigate(["patient/result/", id]);
    }
  }

  setCity(city:string){
    if(city){
      this.currentCity = city;
      this.city = city;
      this.performSearch();
    }else{
      this.currentCity = 'Select city';
      this.city = "";
      this.performSearch();
    }
  }

  setNameAndSearch(name:string){
    this.name = name;
    this.performSearch();
  }

  setType(type:string){
    if(type){
      this.currentType = type;
      this.type = type;
      this.performSearch();
    }else{
      this.type = "";
      this.currentType = 'Select Type';
      this.performSearch();
    }
  }

  closeWarning() {
    this.hideWarning= !this.hideWarning;
  }

   ngOnInit() {
     this.dentistService.getDentists()
       .subscribe(data => this.dentists = data,
         error => console.error(error));
   }

}
