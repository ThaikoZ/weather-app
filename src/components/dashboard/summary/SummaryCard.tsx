import { CurrentWeatherInterface } from "../../../utils/Weather";
import BentoCard from "../../BentoCard";
import SummarySkeleton from "./SummarySkeleton";
import WeatherChart from "./WeatherChart";

interface Props {
  days?: CurrentWeatherInterface[];
}

const SummaryCard = ({ days }: Props) => {
  if (!days)
    return (
      <BentoCard
        light
        className="max-h-[370px] col-span-12 lg:col-span-6 xl:col-span-9"
      >
        <SummarySkeleton />
      </BentoCard>
    );

  return (
    <BentoCard
      light
      className="max-h-[370px] col-span-12 lg:col-span-6 xl:col-span-9"
    >
      <div className="py-7 px-7">
        <h2 className="font-semibold text-[1.2rem] ">Summary</h2>
      </div>
      {/* <div className="flex justify-between items-center gap-3 mb-3">
        <h2 className="font-semibold text-[1.2rem] ">Forecast</h2>
        <div className="flex justify-between gap-1 bg-white bg-opacity-15 py-[0.2rem] px-[0.2rem] rounded-lg w-fit ">
          <label className="cursor-pointer">
            <input
              defaultChecked
              type="radio"
              name="my_tabs_2"
              role="tab"
              className="sr-only peer"
              aria-label="5 Days"
              // onChange={() => setDaysLimit(5)}
            />
            <span className=" inline-block px-2 py-1 rounded-md bg-[#39577B]  text-white bg-opacity-0 text-sm transition-colors duration-200 peer-checked:bg-opacity-95 ">
              5 Days
            </span>
          </label>

          <label className="cursor-pointer">
            <input
              type="radio"
              name="my_tabs_2"
              role="tab"
              className="sr-only peer"
              aria-label="7 Days"
              // onChange={() => setDaysLimit(7)}
            />
            <span className=" inline-block px-2 py-1 rounded-md bg-[#39577B]  text-white bg-opacity-0 text-sm transition-colors duration-200 peer-checked:bg-opacity-95 ">
              7 Days
            </span>
          </label>
        </div>
      </div> */}
      <div className="flex flex-col justify-end h-full items-end">
        <WeatherChart days={days!} mode={"hourly"} />
      </div>
    </BentoCard>
  );
};

export default SummaryCard;
