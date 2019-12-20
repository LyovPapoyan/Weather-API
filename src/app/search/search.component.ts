import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpService } from '../http.service';
import { Weat_data } from '../weat-data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @Output() onAdd: EventEmitter<Weat_data> = new EventEmitter<Weat_data>();

  toggle: boolean = false; 

  city: string;

  addCity: Weat_data[] = [{
    city: null,
    now_degree: null,
    description: null,
    img: null,
    max: null,
    min: null
  }];

  constructor(private httpService: HttpService, private router: Router) { }

ngOnInit() {
  
}

search (city: string) {
  this.httpService.getApi(city).subscribe(data => {
   
    this.addCity[0].city = data.city.name;
    this.addCity[0].description = data.list[0].weather[0].main;
    this.addCity[0].now_degree = Math.floor(data.list[0].main.temp);
    this.addCity[0].max = Math.ceil(data.list[0].main.temp_max);
    this.addCity[0].min = Math.floor(data.list[0].main.temp_min);
   
    if(this.addCity[0].description == "Clear") {
      this.addCity[0].img = '../../assets/clear.png';
    } else if (this.addCity[0].description == 'Clouds'){
      this.addCity[0].img = '../../assets/cloud.jpg';
    } else if(this.addCity[0].description == 'Snow') {
      this.addCity[0].img = '../../assets/snow.jpg'
    } else if(this.addCity[0].description == 'Rain') {
      this.addCity[0].img = '../../assets/rain.jpeg'
    } else {
      this.addCity[0].img = '../../assets/weather02-512.png'
    }

    if (this.addCity[0].city !== null) {
      this.toggle  = true;
    }
  })

  setTimeout(() => {
    this.city = '';
  }, 100);
}

add () {

  this.httpService.post(this.addCity).subscribe(data => {
    
  })
 
  this.router.navigate(['/home'])
}
  
}
