import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router'
import { HttpService } from '../http.service';

@Component({
  selector: 'app-dallas',
  templateUrl: './dallas.component.html',
  styleUrls: ['./dallas.component.css', '../app.component.css']
})
export class DallasComponent implements OnInit {

  weather: any;
  image: string;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService
  ) { }

  ngOnInit() {
    this.image = "https://www.100resilientcities.org/wp-content/uploads/2017/06/Dallas-hero-crop.jpg"
    let observable = this._httpService.getWeather('Dallas')
    observable.subscribe(data => {
      console.log("WERE IN THIS")
      console.log("GOT THE WEATHER---->", data);
      this.weather = data;
      console.log("WEATHER _____>", this.weather)
    })
  }

  

}