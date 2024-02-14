import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor(private http : HttpClient) { }
  // servicetext="This is Service Text";
  // showtodatdate(){
  //   let todaydate=new Date();
  //   return todaydate;
  // }

  private apiurl="http://jsonplaceholder.typicode.com/users";
  getData(){
return this.http.get(this.apiurl);
  }
}
