import classNames from "classnames";
import BentoCard from "../../BentoCard";
import {
  WiDaySunny,
  WiStrongWind,
  WiRaindrop,
  WiDust,
  WiHumidity,
  IconProps,
} from "weather-icons-react";
import { CurrentWeatherInterface } from "../../../utils/Weather";
import WeatherDetailTile from "./WeatherDetailTile";
import WeatherIcon from "./WeatherIcon";
import CurrentTemperatureTile from "./CurrentTemperatureTile";

interface Props {
  data?: CurrentWeatherInterface;
  className?: string;
}

export interface WeatherDetail {
  value: string | number;
  Icon: React.FC<IconProps>;
}

const CurrentWeatherCard = ({ className, data }: Props) => {
  if (!data) return;

  const weatherDetails: WeatherDetail[] = [
    { value: data.pressure, Icon: WiDust },
    { value: data.precipprob + "%", Icon: WiRaindrop },
    { value: data.windspeed + "km/h", Icon: WiStrongWind },
    { value: data.humidity, Icon: WiHumidity },
  ];

  const getCurrentTime12Hour = (): string => {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const period = hours >= 12 ? "PM" : "AM";

    hours = hours % 12;
    hours = hours ? hours : 12;

    return `${hours}:${minutes} ${period}`;
  };

  return (
    <BentoCard className={classNames(className, "px-5 py-7 ")}>
      <div className="grid grid-cols-12 h-fit">
        <div className="col-span-12 row-span-1">
          <h2 className="font-semibold text-lg ">Current Weather</h2>
        </div>
        <div className="col-span-12 row-span-1">
          <p className="text-sm font-light">{getCurrentTime12Hour()}</p>
        </div>
        <div className="col-span-12 xsm:col-span-5  sm:col-span-12 md:col-span-5 flex justify-center">
          <WeatherIcon iconProp={WiDaySunny} />
        </div>
        <div className="col-span-12 xsm:col-span-7  sm:col-span-12 md:col-span-7 flex justify-center">
          <CurrentTemperatureTile
            temp={data.temp}
            conditions={data.conditions}
          />
        </div>
        {weatherDetails.map((item, index) => (
          <WeatherDetailTile item={item} key={index} />
        ))}
      </div>
    </BentoCard>
  );
};

export default CurrentWeatherCard;
