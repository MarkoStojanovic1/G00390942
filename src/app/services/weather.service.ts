import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(
              private http: HttpClient,
  ) { }

  getWeatherData():Observable<any>{
    
   return this.http.get('http://api.openweathermap.org/data/2.5/weather?q=Dublin&appid=d2c43820af2510d888f67f69542ff6fe');
  }
}
