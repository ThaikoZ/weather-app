import classNames from "classnames";
import BentoCard from "../BentoCard";
import {
  WiDaySunny,
  WiStrongWind,
  WiRaindrop,
  WiDust,
} from "weather-icons-react";
import Icon from "../Icon";

interface Props {
  className?: string;
}

const weatherDetails = [
  { value: "173", Icon: WiDust },
  { value: "92%", Icon: WiRaindrop },
  { value: "6km/h", Icon: WiStrongWind },
  { value: "3", Icon: WiDaySunny },
];

const CurrentWeatherCard = ({ className }: Props) => {
  return (
    <BentoCard className={classNames(className, "")}>
      <div className="grid grid-cols-12 h-fit">
        <div className="col-span-12 row-span-1">
          <h2 className="font-semibold text-lg ">Current Weather</h2>
        </div>
        <div className="col-span-12 row-span-1">
          <p className="text-sm font-light">6:25 PM</p>
        </div>
        <div className="col-span-12 xsm:col-span-5  sm:col-span-12 md:col-span-5 flex justify-center">
          <div className="w-36">
            <Icon Icon={WiDaySunny} />
          </div>
        </div>
        <div className="col-span-12 xsm:col-span-7  sm:col-span-12 md:col-span-7 flex justify-center">
          <div className="w-fit xsm:mt-3 sm:mt-0 md:mt-3 me-2 xsm:me-5 sm:me-2 md:me-5">
            <div className="text-8xl font-bold">24</div>
            <div className="text-center text-xl font-regular">Heavy Rain</div>
            <div className="relative text-3xl font-medium top-[-135px] left-[125px]">
              °C
            </div>
          </div>
        </div>
        {weatherDetails.map((item, index) => (
          <div
            className={classNames(
              { "": index == 1 },
              "col-span-6 xsm:col-span-3 sm:col-span-6 md:col-span-3 flex flex-col mt-2 items-center gap-2 "
            )}
          >
            <Icon Icon={item.Icon} className="w-12" />
            <p>{item.value}</p>
          </div>
        ))}
      </div>
    </BentoCard>
  );
};

export default CurrentWeatherCard;
