export interface WeatherData {
  LocalObservationDateTime: string
  EpochTime: number
  WeatherText: string
  WeatherIcon: number
  HasPrecipitation: boolean
  PrecipitationType: string | null
  IsDayTime: boolean
  Temperature: Temperature
  MobileLink: string
  Link: string
}

export interface Temperature {
  Metric: Metric
  Imperial: Imperial
}

export interface Metric {
  Value: number
  Unit: string
  UnitType: number
}

export interface Imperial {
  Value: number
  Unit: string
  UnitType: number
}
