import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IEmployee } from './employee';

// import 'rxjs/add/operator/catch';
// import 'rxjs/add/observable/throw';

@Injectable()
export class EmployeeService {

  private _url: string = "/assets/data/employees.json";

  private emplist = [
    {"id":1, "name":"Andrew", "age":30},
    {"id":2, "name":"Thor", "age":30},
    {"id":3, "name":"Steve", "age":30},
    {"id":4, "name":"Tony", "age":30},
    {"id":5, "name":"Bucky", "age":30}
  ];

  constructor(private http: HttpClient) { }

  getAllEmployees(): Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>(this._url);

    //return this.http.get<IEmployee[]>(this._url)
    //              .catch(this.errorHandler);
  }

  // errorHandler(error: HttpErrorResponse){
  //   return Observable.throw(error.message || "Server Error ");
  // }

}
