
import {throwError as observableThrowError,  Observable } from 'rxjs';

import {catchError} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IEmployee } from './employee';



@Injectable()
export class EmployeeService {

  private _url: string = "https://www.stewartwong.com/projects/api/Project"

  constructor(private http: HttpClient) { }

  getEmployees(): Observable<IEmployee[]> {
<<<<<<< HEAD
    return this.http.get<IEmployee[]>(this._url).pipe(
                    catchError(this.errorHandler));
=======
    return this.http.get(this._url, {headers: {'Authorization': 'Basic ' + btoa("testuser:asdf1234")}})
                    .catch(this.errorHandler);
>>>>>>> 2c6c73d157b1ea9fb513ceb8ab396fa9cd035d36
  }

  errorHandler(error: HttpErrorResponse){
    return observableThrowError(error.message || "Server Error")
  }
}
