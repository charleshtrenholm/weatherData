import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router'
import { HttpService } from '../http.service';

@Component({
  selector: 'app-washingtondc',
  templateUrl: './washingtondc.component.html',
  styleUrls: ['./washingtondc.component.css', '../app.component.css']
})
export class WashingtondcComponent implements OnInit {

  weather: any;
  image: string;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService
  ) { }

  ngOnInit() {
    this.image = "http://media2.govtech.com/images/940*623/shutterstock_118545721.jpg"
    let observable = this._httpService.getWeather('Washington')
    observable.subscribe(data => {
      console.log("WERE IN THIS")
      console.log("GOT THE WEATHER---->", data);
      this.weather = data;
      console.log("WEATHER _____>", this.weather)
    })
  }


}
