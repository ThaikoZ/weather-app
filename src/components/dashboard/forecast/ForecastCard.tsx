import { useState } from "react";
import { CurrentWeatherInterface } from "../../../utils/Weather";
import BentoCard from "../../BentoCard";
import ForecastItemList from "./ForecastItemList";
import ForecastSkeleton from "./ForecastSkeleton";

interface Props {
  days?: CurrentWeatherInterface[];
}

type Limit = 5 | 7;

const ForecastCard = ({ days }: Props) => {
  const [daysLimit, setDaysLimit] = useState<Limit>(5);
  if (!days)
    return (
      <BentoCard
        light
        className="px-7 py-7 col-span-12 sm:col-span-6 lg:col-span-6 xl:col-span-3 "
      >
        <ForecastSkeleton />{" "}
      </BentoCard>
    );

  return (
    <BentoCard
      light
      className="px-7 py-7 col-span-12 sm:col-span-6 lg:col-span-6 xl:col-span-3 "
    >
      <div>
        <div className="flex justify-between items-center gap-3 mb-3">
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
                onChange={() => setDaysLimit(5)}
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
                onChange={() => setDaysLimit(7)}
              />
              <span className=" inline-block px-2 py-1 rounded-md bg-[#39577B]  text-white bg-opacity-0 text-sm transition-colors duration-200 peer-checked:bg-opacity-95 ">
                7 Days
              </span>
            </label>
          </div>
        </div>
        <div className="flex flex-col h-full justify-between ">
          {days.map(
            (item, index) =>
              index < daysLimit && (
                <ForecastItemList key={index} details={item} />
              )
          )}
        </div>
      </div>
    </BentoCard>
  );
};

export default ForecastCard;
