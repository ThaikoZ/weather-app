export const convertToCelcius = (fahrenheit: number): number => {
  const celsius = ((fahrenheit - 32) * 5) / 9;
  return Math.round(celsius * 100) / 100;
};

export interface CurrentWeatherInterface {
  conditions: string;
  datetime: string;
  humidity: number;
  pressure: number;
  temp: number;
  windspeed: number;
  precipprob: number;
  icon: string;
}

export interface WeatherInterface {
  address: string;
  currentConditions?: CurrentWeatherInterface;
  latitude: number;
  longitude: number;
  days: CurrentWeatherInterface[];
}

export interface MultiWeatherInterface {
  locations: WeatherInterface[];
}
