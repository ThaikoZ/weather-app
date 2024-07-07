import useSearch from "../../../hooks/useSearch";
import { capitalizeEachWord } from "../../../utils/StringFunc";
import { WeatherInterface } from "../../../utils/Weather";
import WeatherIcon from "../../WeatherIcon";

interface Props {
  details: WeatherInterface;
}

const CityItem = ({ details }: Props) => {
  const { applyQueryParams } = useSearch();
  return (
    <div className="flex flex-col gap-3 rounded-xl transition-colors hover:bg-white hover:bg-opacity-[0.01] py-[0.45rem] duration-300 ">
      <div className="flex justify-between items-center gap-4">
        <div className="text-lg font-regular flex gap-5 items-center">
          <WeatherIcon weatherTitle={details.days[0].icon} />
          <div
            className="cursor-pointer"
            onClick={() => applyQueryParams(details.address)}
          >
            {details.address}
          </div>
        </div>
        <div className="text-end text-sm">
          {capitalizeEachWord(details.days[0].conditions.split(",")[0])}
        </div>
      </div>
    </div>
  );
};

export default CityItem;
