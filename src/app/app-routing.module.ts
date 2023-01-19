import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherInfoComponent } from './weather-info/weather-info.component';
import { SearchCityComponent } from './search-city/search-city.component';

const routes: Routes = [
  {
    path: '',
    component: SearchCityComponent,
    title: 'Weather App',
  },
  {
    path: 'app-weather-info/:cityKey',
    component: WeatherInfoComponent,
    title: 'Weather Info',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [SearchCityComponent, WeatherInfoComponent];
