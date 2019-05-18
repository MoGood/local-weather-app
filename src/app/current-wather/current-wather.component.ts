import { Component, OnInit } from '@angular/core';
import { ICurrentWeather } from '../icurrent-weather';

@Component({
  selector: 'app-current-wather',
  templateUrl: './current-wather.component.html',
  styleUrls: ['./current-wather.component.css']
})
export class CurrentWatherComponent implements OnInit {
current: ICurrentWeather
  constructor() {
this.current = {
  city: 'Bethesda',
  country: 'US',
  date:new Date(),
  image: '',
  temperature: 72,
  description: 'Sunny'
}
   }

  ngOnInit() {
  }

}
