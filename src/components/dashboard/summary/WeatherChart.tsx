import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis } from "recharts";
import CustomTooltip from "./CustomTooltip";
import {
  convertToCelcius,
  CurrentWeatherInterface,
} from "../../../utils/Weather";
import { useEffect, useState } from "react";

interface Props {
  days: CurrentWeatherInterface[];
  mode: "hourly" | "monthly";
}

interface Data {
  name: string;
  temp: number;
  rain: number;
}

const WeatherChart = ({ days }: Props) => {
  const [data, setData] = useState<Data[]>([]);

  useEffect(() => {
    const prepareData = () => {
      const itemsAmount = 18;

      const currentTime = new Date();
      const currentHour = currentTime.getHours();

      const isNextDay = currentHour + itemsAmount >= 24;

      if (!isNextDay)
        days = days[0].hours.slice(currentHour - 1, currentHour + itemsAmount);
      else {
        const d1 = days[0].hours.slice(currentHour - 1, days[0].hours.length);
        const d2 = days[1].hours.slice(0, currentHour + itemsAmount - 24);
        days = [...d1, ...d2];
      }

      const newData = days
        .map((day, index) => {
          const time = day.datetime.split(":");

          let name = "";
          if (index == 0 || index == days.length - 1) name = "";
          else if (index == 1) name = "Now";
          else name = `${time[0]}:${time[1]}`;

          return {
            name: name,
            temp: convertToCelcius(day.temp),
            rain: day.precipprob,
          };
        })
        .filter((_, index) => index % 2 === 0);

      setData(newData);
    };
    prepareData();
  }, []);

  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        data={data}
        margin={{ top: 50, right: 0, left: 0, bottom: 110 }}
      >
        <XAxis dataKey="name" stroke="white" strokeWidth={0} tick={true} />
        <defs>
          <linearGradient id="colorTemp" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#214f8b" stopOpacity={1} />
            <stop offset="95%" stopColor="#214f8b" stopOpacity={0} />
          </linearGradient>
        </defs>
        <Tooltip content={<CustomTooltip />} />
        <Area
          type="monotone"
          dataKey="temp"
          strokeOpacity={0}
          fillOpacity={1}
          fill="url(#colorTemp)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default WeatherChart;
