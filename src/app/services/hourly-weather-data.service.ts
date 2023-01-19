import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Observable } from 'rxjs';
import { HourlyWeatherData } from '../models/hourlyWeatherData.model';

@Injectable({
  providedIn: 'root'
})
export class HourlyWeatherDataService {

  constructor(private http:HttpClient) { }

  getHourlyWeatherData(cityCode:string) : Observable<HourlyWeatherData[]>{
    return this.http.get<HourlyWeatherData[]>(environment.baseUrlHourlyWeather + `/${cityCode}`,{
      params : new HttpParams()
      .set(environment.keyName,environment.keyValue)

    })
  }
}
