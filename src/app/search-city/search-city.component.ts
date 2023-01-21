import { Component, Input, OnInit } from '@angular/core';
import { CityDataService } from '../services/city-data.service';
import { CityData } from '../models/cityData.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-city',
  templateUrl: './search-city.component.html',
  styleUrls: ['./search-city.component.css'],
})
export class SearchCityComponent implements OnInit {
  static CityData: any;

  constructor(
    private cityDataService: CityDataService,
    private router: Router
  ) {}

  cityData: CityData[] | undefined;

  ngOnInit(): void {}

  callCityApi(event: Event) {
    const inputElement = event.target as HTMLTextAreaElement;
    if (event.target && inputElement.value.length > 2) {
      this.cityDataService.getCityData(inputElement.value).subscribe({
        next: (response) => {
          console.log(response);
          this.cityData = response;
        },
      });
    }
  }
  selectSpecificCity(cityKey: string, cityEnglishName: string) {
    this.router.navigate(['/app-weather-info', cityKey], {
      queryParams: { cityEnglishName },
    });
   
  }
  handleChange(){
    console.log('clicked outside');
    this.cityData=[];
  }
}
