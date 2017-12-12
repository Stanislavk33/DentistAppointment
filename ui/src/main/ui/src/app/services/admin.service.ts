import {Injectable} from "@angular/core";
import {ManageBlockModel} from "./model/manage.block.model";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {BaseResultModel} from "../models/base.result.model";

@Injectable()
export class AdminService {

   private static readonly MANAGE_BLOCKED_USERS_URL: string = "/manageBlockedUsers";

   constructor(private http: HttpClient) {
   }

   public blockUser(adminEmail: string,
                    targetUserEmail: string,
                    block: boolean): Observable<BaseResultModel> {

      let requestModel: ManageBlockModel = new ManageBlockModel(adminEmail, targetUserEmail, block);
      return this.http.post<BaseResultModel>(AdminService.MANAGE_BLOCKED_USERS_URL, requestModel);
   }

}
