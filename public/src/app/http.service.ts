import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getWeather(city: string){
    return this._http.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + ",us&units=imperial&appid=9ffb8b79a660adf963fcaa632c3aa429")
  }

}
