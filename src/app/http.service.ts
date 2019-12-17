import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  API_KEY: string = '8e78b92430f8afafe466ece3b158fcd2';

  constructor(private http: HttpClient) {  }

  getApi(city: string): Observable<any> {
   return this.http.get<any>('http://api.openweathermap.org/data/2.5/forecast?q=' + city + '&units=metric&APPID=' +  this.API_KEY );
  }

}
