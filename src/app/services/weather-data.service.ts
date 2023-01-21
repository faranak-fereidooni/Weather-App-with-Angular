import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Observable } from 'rxjs';
import { WeatherData } from '../models/weatherData.model';

@Injectable({
  providedIn: 'root',
})
export class WeatherDataService {
  constructor(private http: HttpClient) {}

  getWeatherData(cityCode: string): Observable<WeatherData[]> {
    return this.http.get<WeatherData[]>(
      environment.baseUrlWeather + `/${cityCode}`,
      {
        params: new HttpParams()
        .set(environment.keyName, environment.keyValue),
      }
    );
  }
}
