import { Component, OnInit, Input } from '@angular/core';
import { WeatherData } from './../models/weatherData.model';
import { WeatherDataService } from './../services/weather-data.service';
import { ActivatedRoute } from '@angular/router';
import { HourlyWeatherDataService } from './../services/hourly-weather-data.service';
import { HourlyWeatherData } from '../models/hourlyWeatherData.model';
import { CityData } from './../models/cityData.model';

@Component({
  selector: 'app-weather-info',
  templateUrl: './weather-info.component.html',
  styleUrls: ['./weather-info.component.css'],
})
export class WeatherInfoComponent implements OnInit {
  weatherData: WeatherData[] | undefined;
  hourlyWeatherData: HourlyWeatherData[] | undefined;
  myDate = new Date();
  cityData: CityData[] | undefined;
  englishName!: string;

  constructor(
    private weatherDataService: WeatherDataService,
    private hourlyWeatherDataService: HourlyWeatherDataService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    let cityKey: string = this.route.snapshot.paramMap.get('cityKey') ?? '';
    this.englishName =
      this.route.snapshot.queryParamMap.get('cityEnglishName') ?? '';
    if (cityKey == '' && this.englishName == '') {
      return;
    }
    this.weatherDataService.getWeatherData(cityKey).subscribe({
      next: (response) => {
        console.log(response);
        this.weatherData = response;
      },
    });
    this.hourlyWeatherDataService.getHourlyWeatherData(cityKey).subscribe({
      next: (response) => {
        console.log(response);
        this.hourlyWeatherData = response;
      },
    });
  }
}
