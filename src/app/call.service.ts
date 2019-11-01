import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CallService {

  constructor( private http : HttpClient) { }

  private baseUrl: string = "https://qik-server.herokuapp.com/app/classes/Pet";

  getAllObjects() {
    
  //   const httpOptions = { 
  //     headers: new HttpHeaders({
  //       'Content-Type': 'application/json',
  //       'X-Parse-Application-Id': "shbjmmhfcp",
  //       'X-Parse-Master-Key': "qtvlqrxyrj"
  //     })
  //   };
  //   return this.http.get<any>(this.baseUrl, httpOptions).pipe(
  //     map(result => {
  //       console.log(result);
  //       return result;
  //     }, (error) => {
  //       // The object was not retrieved successfully.
  //       //alert("Error: " + error["error"]);
  //       return error["error"];
  //     }));
   }
}
