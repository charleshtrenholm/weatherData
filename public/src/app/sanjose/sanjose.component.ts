import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router'
import { HttpService } from '../http.service';

@Component({
  selector: 'app-sanjose',
  templateUrl: './sanjose.component.html',
  styleUrls: ['./sanjose.component.css', '../app.component.css']
})
export class SanjoseComponent implements OnInit {

  weather: any;
  image: string;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService
  ) { }

  ngOnInit() {
    this.image = "https://assets.sourcemedia.com/dims4/default/cd3ad93/2147483647/resize/680x%3E/quality/90/?url=https%3A%2F%2Fassets.sourcemedia.com%2Ff3%2Fb0%2F18f7c142421eaa564826f21e48c9%2Fadobestock-165843917.jpeg"
    let observable = this._httpService.getWeather('San Jose')
    observable.subscribe(data => {
      console.log("WERE IN THIS")
      console.log("GOT THE WEATHER---->", data);
      this.weather = data;
      console.log("WEATHER _____>", this.weather)
    })
  }


}
