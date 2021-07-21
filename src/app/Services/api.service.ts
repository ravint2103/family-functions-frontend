import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public rootUrl: any = "http://localhost:4205";
  public allAmounts: any = "/allamounts";
  public allEvents: any = "/allevents";


  constructor(private _http: HttpClient, private router: Router) {

    // if (localStorage.getItem('userToken')) {
    //   this.currentUserInfo = JSON.parse(localStorage.getItem("userInfo"));
    // }
  }

  doGET(url?: any, headerOptions?: any) {
    return this._http.get(url, headerOptions);
  }

  doPOST(url?: any, postBody?: any, headerOptions?: any) {
    return this._http.post(url, postBody, headerOptions);

  }

  doPUT(url?: any, postBody?: any, headerOptions?: any) {
    return this._http.put(url, postBody, headerOptions);
  }


  doDELETE(url?: any, headerOptions?: any) {
    return this._http.delete(url, headerOptions);
  }

  commonHeaders(type?: any) {
    if (type == "token") {
      let httpHeaders = new HttpHeaders({
        "Content-Type": "application/json",
        "Authorization": "Token " + localStorage.getItem("userToken")
      });

      let headerOptions = {
        headers: httpHeaders
      };

      return headerOptions;
    }
    else if (type == "onlytoken") {
      let httpHeaders = new HttpHeaders({
        "Authorization": "Token " + localStorage.getItem("userToken")
      });

      let headerOptions = {
        headers: httpHeaders
      };

      return headerOptions;
    }

    else {
      let httpHeaders = new HttpHeaders({
        "Content-Type": "application/json",
      });

      let headerOptions = {
        headers: httpHeaders
      };

      return headerOptions;
    }
  }
}
