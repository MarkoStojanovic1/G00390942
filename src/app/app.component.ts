import { Component } from '@angular/core';
import {WeatherService} from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  title = 'weather';
  weather:any = [];
  constructor(private service:WeatherService) {
    
  }

  ngOnInit(){
    this.service.getWeatherData().subscribe( (data)=>{
      this.weather = data.weather;
    } );
  }

  
}
