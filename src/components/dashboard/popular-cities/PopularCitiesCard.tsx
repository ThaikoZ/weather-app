import classNames from "classnames";
import { MultiWeatherInterface } from "../../../utils/Weather";
import BentoCard from "../../BentoCard";
import CityItem from "./CityItem";
import PopularCitiesCardSkeleton from "./PopularCitiesCardSkeleton";

interface Props {
  className?: string;
  data?: MultiWeatherInterface;
}

const PopularCitiesCard = ({ className, data }: Props) => {
  if (!data)
    return (
      <BentoCard
        light
        className={classNames(
          className,
          "px-5 pt-7 pb-3 col-span-12 sm:col-span-6 lg:col-span-4 xl:col-span-3 "
        )}
      >
        <PopularCitiesCardSkeleton />
      </BentoCard>
    );

  return (
    <BentoCard
      light
      className={classNames(
        className,
        "p-7 pb-3 col-span-12 sm:col-span-6 lg:col-span-4 xl:col-span-3 "
      )}
    >
      <div className="flex h-full flex-col justify-between ">
        <div className="flex justify-between items-center pb-3">
          <h2 className="font-semibold text-[1.2rem] w-full xsm:w-auto sm:w-full md:w-auto">
            Popular Cities
          </h2>
          <h2 className="font-light text-[1.05rem] hover:underline cursor-pointer text-end ">
            View{" "}
            <span className="hidden xsm:inline sm:hidden md:inline">more</span>
          </h2>
        </div>
        {data &&
          data.locations.map((location, index) => (
            <CityItem key={index} details={location} />
          ))}
      </div>
    </BentoCard>
  );
};

export default PopularCitiesCard;
