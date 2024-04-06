import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { formsdetails } from './formdata.service';
import { map } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpservicesService {
  constructor(private http: HttpClient) {}

  errorsubject = new Subject<HttpErrorResponse>();

  postData(val: formsdetails) {
    const headers = new HttpHeaders().set('myheader', 'hello-world');

    this.http
      .post<{ name: string }>(
        'https://myproject-c093d-default-rtdb.firebaseio.com/cards.json',
        val,{headers:headers}
      )
      .subscribe({
        next:(val)=>{
            console.log(val,'i am expecting object from the post method')
        },
        error: (err) => {
          this.errorsubject.next(err);
        },
      });
  }

  getAlldata() {

    let headers = new HttpHeaders()
    headers= headers.set('application','todo')
    headers = headers.set('name','todo')

    let httpparams= new HttpParams();
    httpparams=httpparams.set('page','10')
    return this.http
      .get<{ [key: string]: formsdetails }>(
        'https://myproject-c093d-default-rtdb.firebaseio.com/cards.json',{headers:headers,params:httpparams}
      )
      .pipe(
        map((response: { [key: string]: formsdetails }) => {
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
      .delete<formsdetails>('https://myproject-c093d-default-rtdb.firebaseio.com/cards.json')
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
          const modifieddata:formsdetails = { ...data, id: id };
          return modifieddata;
        })
      );
  }
}
