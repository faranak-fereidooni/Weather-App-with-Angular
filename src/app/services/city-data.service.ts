import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CityData } from '../models/cityData.model';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CityDataService {


  constructor(private http:HttpClient){}

  getCityData(cityName:string):Observable<CityData[]>{
      return this.http.get<CityData[]>(environment.baseUrlCity,{
        params:new HttpParams()
        .set(environment.keyName,environment.keyValue)
        .set('q',cityName),
      })
    }
}

