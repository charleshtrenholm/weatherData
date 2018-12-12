import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router'
import { HttpService } from '../http.service';

@Component({
  selector: 'app-seattle',
  templateUrl: './seattle.component.html',
  styleUrls: ['./seattle.component.css', '../app.component.css']
})
export class SeattleComponent implements OnInit {

  weather: any;
  image: string;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService
  ) { }

  ngOnInit() {
    this.image = "https://lonelyplanetimages.imgix.net/a/g/hi/t/dd33030e358ca24706d626887d6d33ee-seattle.jpg?sharp=10&vib=20&w=1200"
    let observable = this._httpService.getWeather('Seattle')
    observable.subscribe(data => {
      this.weather = data;
    })
  }


}