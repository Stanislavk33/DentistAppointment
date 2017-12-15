import {Component, OnInit} from '@angular/core';
import {UsersService} from "../../../services/users.service";
import {HttpClient} from "@angular/common/http";
import {UserModel} from "../../../models/user.model";
import {Comparator} from "clarity-angular";

class DentistComparator implements Comparator<UserModel> {
  compare(a: UserModel, b: UserModel) {
    return a.rating - b.rating;
  }
}

@Component({
              moduleId: module.id,
              selector: 'dentist-results',
              templateUrl: 'dentist-results.component.html',
              styleUrls: ["dentist-results.component.css"],
              providers: []
           })
export class DentistResultsComponent implements OnInit {
  public dentists: UserModel[] = [];
  public city: string = '';
  private name: string = '';
  private type: string = '';
  private currentCity = 'Select City';
  private currentType = 'Select Type';
  private dentistComparator = new DentistComparator();

   constructor(private usersService: UsersService,
               private http : HttpClient) {
   }

  public performSearch(){
    this.usersService.getFilteredDentists(this.name, this.city, this.type)
            .subscribe(data => this.dentists = data,
            error => console.error(error));
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

   ngOnInit() {
     this.usersService.getDentists()
       .subscribe(data => this.dentists = data,
         error => console.error(error));
   }

}
