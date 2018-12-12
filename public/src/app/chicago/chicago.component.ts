import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router'
import { HttpService } from '../http.service';

@Component({
  selector: 'app-chicago',
  templateUrl: './chicago.component.html',
  styleUrls: ['./chicago.component.css', '../app.component.css']
})
export class ChicagoComponent implements OnInit {

  weather: any;
  image: string;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService
  ) { }

  ngOnInit() {
    this.image = "https://cdn-a.william-reed.com/var/wrbm_gb_food_pharma/storage/images/publications/food-beverage-nutrition/foodnavigator-usa.com/article/2017/12/18/the-future-of-food-is-being-written-in-chicago-not-austin-or-boulder-cfbn/7663952-1-eng-GB/The-future-of-food-is-being-written-in-Chicago-not-Austin-or-Boulder-CFBN_wrbm_large.jpg"
    let observable = this._httpService.getWeather('Chicago');
    observable.subscribe(data => {
      console.log("WERE IN THIS")
      console.log("GOT THE WEATHER---->", data);
      this.weather = data;
      console.log("WEATHER _____>", this.weather)
    })
  }


}
