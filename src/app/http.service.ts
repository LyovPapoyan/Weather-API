import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Weat_data } from './weat-data';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  API_KEY: string = '8e78b92430f8afafe466ece3b158fcd2';

  constructor(private http: HttpClient) {  }

  getApi(city: string): Observable<any> {
   return this.http.get<any>('http://api.openweathermap.org/data/2.5/forecast?q=' + city + '&units=metric&APPID=' +  this.API_KEY );
  }

  post(data:Weat_data[]): Observable<any> {
    let body = {city: data[0].city, desc: data[0].description, temp: data[0].now_degree, img: data[0].img, min: data[0].min, max: data[0].max}
    return this.http.post('http://localhost:40000', body)
  }

  get(): Observable<any> {
   return this.http.get<any>('http://localhost:40000')
  }
}
