import React from "react";
import {
  IconProps,
  WiDayCloudy,
  WiRain,
  WiCloudy,
  WiDaySunny,
} from "weather-icons-react";

const weatherMap: { [key: string]: React.FC<IconProps> } = {
  //TODO: Add nightly icons
  "partly-cloudy-night": WiDayCloudy,
  "partly-cloudy-day": WiDayCloudy,
  rain: WiRain,
  cloudy: WiCloudy,
  "clear-day": WiDaySunny,
  "clear-night": WiDaySunny,
};

const WeatherIcon: React.FC<{
  weatherTitle: string;
  size?: number;
  color?: string;
}> = ({ weatherTitle, size = 40, color = "white" }) => {
  const IconComponent = weatherMap[weatherTitle];

  if (!IconComponent) {
    return <div>{weatherTitle}</div>;
  }

  return <IconComponent size={size} color={color} className="m-0 p-0" />;
};

export default WeatherIcon;
