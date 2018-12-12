import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router'
import { HttpService } from '../http.service';

@Component({
  selector: 'app-burbank',
  templateUrl: './burbank.component.html',
  styleUrls: ['./burbank.component.css', '../app.component.css']
})
export class BurbankComponent implements OnInit {

  weather: any;
  image: string;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService
  ) { }

  ngOnInit() {
    this.image = "https://s.abcnews.com/images/Travel/CB_burbank_california_jef_130701_33x16_992.jpg"
    let observable = this._httpService.getWeather('Burbank');
    observable.subscribe(data => {
      console.log("WERE IN THIS")
      console.log("GOT THE WEATHER---->", data);
      this.weather = data;
      console.log("WEATHER _____>", this.weather)
    })
  }


}