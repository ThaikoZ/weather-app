import { WeatherDetail } from "./CurrentWeatherCard";
import Icon from "../../Icon";

interface Props {
  item: WeatherDetail;
}

const WeatherDetailTile = ({ item }: Props) => {
  return (
    <div className="col-span-6 xsm:col-span-3 sm:col-span-6 md:col-span-3 flex flex-col mt-2 items-center gap-2 ">
      <Icon Icon={item.Icon} className="w-12" />
      <p>{item.value}</p>
    </div>
  );
};

export default WeatherDetailTile;
