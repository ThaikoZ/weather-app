import { useEffect, useState } from "react";
import Avatar from "../components/Avatar";
import BentoCard from "../components/BentoCard";
import CurrentWeatherCard from "../components/dashboard/current-weather/CurrentWeatherCard";
import NotificationBell from "../components/NotificationBell";
import SearchInput from "../components/SearchInput";
import { defaultWeatherObject, WeatherInterface } from "../utils/Weather";
import { axiosInstance, apiKey } from "../services/api-client";

const DashboardPage = () => {
  const [data, setData] = useState<WeatherInterface>(defaultWeatherObject);

  useEffect(() => {
    axiosInstance
      .get("Warsaw" + apiKey)
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="sm:h-[100vh] selection:bg-none flex flex-col gap-10 w-full p-10">
      <div className="flex justify-between w-full gap-5 h-10">
        <div className="">
          <SearchInput />
        </div>
        <div className="flex items-center gap-2.5">
          <NotificationBell /> <Avatar />
        </div>
      </div>
      <div className="w-full grid grid-cols-12 gap-5 space-5">
        <CurrentWeatherCard
          data={data.currentConditions}
          className="col-span-12 sm:col-span-6 lg:col-span-4 xl:col-span-3"
        />
        <BentoCard className="col-span-12 sm:col-span-6 lg:col-span-4 xl:col-span-6">
          Map
        </BentoCard>
        <BentoCard
          light
          className=" col-span-12 sm:col-span-6 lg:col-span-4 xl:col-span-3 "
        >
          Popular Cities
        </BentoCard>
        <BentoCard
          light
          className=" col-span-12 sm:col-span-6 lg:col-span-6 xl:col-span-3 "
        >
          Forecast
        </BentoCard>
        <BentoCard light className=" col-span-12 lg:col-span-6 xl:col-span-9">
          Summary
        </BentoCard>
      </div>
    </div>
  );
};

export default DashboardPage;
