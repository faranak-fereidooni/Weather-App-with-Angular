import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchCityComponent } from './search-city/search-city.component';
import { WeatherInfoComponent } from './weather-info/weather-info.component';
import { ClickedOutsideDirective } from './directives/clicked-outside.directive';

@NgModule({
  declarations: [
    AppComponent,
    SearchCityComponent,
    WeatherInfoComponent,
    routingComponents,
    ClickedOutsideDirective,
  ],
  imports: [HttpClientModule, BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
