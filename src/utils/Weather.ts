export const convertToCelcius = (fahrenheit: number): number => {
  const celsius = ((fahrenheit - 32) * 5) / 9;
  return Math.round(celsius * 100) / 100;
};

interface Hours {
  conditions: string;
  datetime: string;
  humidity: number;
  pressure: number;
  temp: number;
  windspeed: number;
  precipprob: number;
  icon: string;
}

export interface CurrentWeatherInterface {
  conditions: string;
  datetime: string;
  humidity: number;
  pressure: number;
  temp: number;
  windspeed: number;
  precipprob: number;
  icon: string;
  hours?: Hours[];
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
