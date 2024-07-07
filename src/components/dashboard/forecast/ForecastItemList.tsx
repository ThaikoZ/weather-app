import { capitalizeEachWord } from "../../../utils/StringFunc";
import {
  convertToCelcius,
  CurrentWeatherInterface,
} from "../../../utils/Weather";
import WeatherIcon from "../../WeatherIcon";

interface Props {
  details: CurrentWeatherInterface;
}

const ForecastItemList = ({ details }: Props) => {
  const convertDate = (dateString: string) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleString("default", { month: "short" });
    const weekDay = date.toLocaleString("default", { weekday: "short" });

    return `${day} ${month}, ${weekDay}`;
  };

  return (
    <div className="flex justify-between items-center py-2 transition-colors hover:bg-white hover:bg-opacity-[0.01] duration-300 ">
      <div className="flex gap-5 items-center">
        <WeatherIcon weatherTitle={details.icon} size={38} />
        <div className="font-medium">
          {Math.round(convertToCelcius(details.temp))} °C
        </div>
      </div>
      <div>{capitalizeEachWord(convertDate(details.datetime))}</div>
    </div>
  );
};

export default ForecastItemList;
