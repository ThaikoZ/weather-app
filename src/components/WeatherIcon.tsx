import React from "react";
import {
  IconProps,
  WiDayCloudy,
  WiRain,
  WiCloudy,
  WiDaySunny,
} from "weather-icons-react";

const weatherMap: { [key: string]: React.FC<IconProps> } = {
  "partly-cloudy-day": WiDayCloudy,
  rain: WiRain,
  cloudy: WiCloudy,
  "clear-day": WiDaySunny,
};

const WeatherIcon: React.FC<{
  weatherTitle: string;
  size?: number;
  color?: string;
}> = ({ weatherTitle, size = 40, color = "white" }) => {
  const IconComponent = weatherMap[weatherTitle];

  if (!IconComponent) {
    return <div>icon</div>;
  }

  return <IconComponent size={size} color={color} className="m-0 p-0" />;
};

export default WeatherIcon;
