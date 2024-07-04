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
}

export interface WeatherInterface {
  address: string;
  currentConditions: CurrentWeatherInterface;
}

export const defaultWeatherObject: WeatherInterface = {
  address: "",
  currentConditions: {
    conditions: "",
    datetime: "",
    humidity: 0,
    pressure: 0,
    temp: 0,
    windspeed: 0,
    precipprob: 25,
  },
};
