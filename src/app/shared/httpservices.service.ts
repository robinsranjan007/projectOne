import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { formsdetails, FormsDetailsResponse} from './formdata.service';
import {   map,  } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class HttpservicesService {
  constructor(private http: HttpClient, private authservice: AuthService) {}

  errorsubject = new Subject<HttpErrorResponse>();

  postData(val: formsdetails) {
    

    this.http
      .post<{ name: string }>(
        'https://myproject-c093d-default-rtdb.firebaseio.com/cards.json',
        val
      )
      .subscribe({
        next: (val) => {
          console.log(val, 'i am expecting object from the post method');
        },
        error: (err) => {
          this.errorsubject.next(err);
        },
      });
  }

  getAlldata() {
    return this.http.get<FormsDetailsResponse>('https://myproject-c093d-default-rtdb.firebaseio.com/cards.json').pipe(
    
      map((response:FormsDetailsResponse) => {
        let myarr = [];
        for (let key in response) {
          if (response.hasOwnProperty(key))
            myarr.push({ ...response[key], id: key });
        }
        return myarr;
      })
    );
  }

  deleteData(id: string | undefined) {
    this.http
      .delete<formsdetails>(
        'https://myproject-c093d-default-rtdb.firebaseio.com/cards/' +
          id +
          '.json'
      )
      .subscribe({
        error: (err) => {
          this.errorsubject.next(err);
        },
      });
  }

  deeteAllData() {
    this.http
      .delete<formsdetails>(
        'https://myproject-c093d-default-rtdb.firebaseio.com/cards.json'
      )
      .subscribe({
        error: (err) => {
          this.errorsubject.next(err);
        },
      });
  }

  updateData(data: formsdetails | undefined, id: string | undefined) {
    this.http
      .put<formsdetails>(
        'https://myproject-c093d-default-rtdb.firebaseio.com/cards/' +
          id +
          '.json',
        data
      )
      .subscribe({
        error: (err) => {
          this.errorsubject.next(err);
        },
      });
  }

  getDetails(id: string | undefined) {
    return this.http
      .get<formsdetails>(
        'https://myproject-c093d-default-rtdb.firebaseio.com/cards/' +
          id +
          '.json'
      )
      .pipe(
        map((data) => {
          console.log(data);
          const modifieddata: formsdetails = { ...data, id: id };
          return modifieddata;
        })
      );
  }
}
