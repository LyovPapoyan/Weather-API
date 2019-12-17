import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router'
import { Weat_data } from '../weat-data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  weather: Weat_data[] = [] 

 toggle: boolean = false;

  constructor(private router: Router) { }

  ngOnInit() {

    if (localStorage.length !== 0) {
      this.weather.push(JSON.parse(localStorage.getItem('info')));
   } 
    
    if (this.weather.length != 0){
      this.toggle = true;
    }
  }

  

  redirect() {
    this.router.navigateByUrl('/search') 
  }

}
