import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router'
import { Weat_data } from '../weat-data';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  weather: Weat_data[] = [] ;

 toggle: boolean = false;

  constructor(private router: Router, private http: HttpService) { }

  ngOnInit() {
    
  setTimeout(() => {
    this.http.get().subscribe(data => {
  
       this.weather = (JSON.parse(data));
       console.log(this.weather);
       if (this.weather.length != 0){
        this.toggle = true;
      }
       
     })
  }, 100); 
  }

  redirect() {
    this.router.navigateByUrl('/search') 
  }

}
