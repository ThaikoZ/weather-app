import { useEffect, useState } from "react";
import Avatar from "../components/Avatar";
import BentoCard from "../components/BentoCard";
import CurrentWeatherCard from "../components/dashboard/current-weather/CurrentWeatherCard";
import NotificationBell from "../components/NotificationBell";
import SearchInput from "../components/SearchInput";
import { WeatherInterface } from "../utils/Weather";
import { axiosInstance, apiKey } from "../services/api-client";
import MapCard from "../components/dashboard/map/MapCard";

const DashboardPage = () => {
  const [data, setData] = useState<WeatherInterface>();

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
          data={data?.currentConditions}
          className="h-[338px] sm:h-full col-span-12 sm:col-span-6 lg:col-span-4 xl:col-span-3"
        />
        {/* 52.2297  21.0122 */}
        <MapCard
          className="h-[338px] sm:h-full"
          lat={data?.latitude}
          lng={data?.longitude}
        />
        <BentoCard
          light
          className="px-5 py-7  col-span-12 sm:col-span-6 lg:col-span-4 xl:col-span-3 "
        >
          Popular Cities
        </BentoCard>
        <BentoCard
          light
          className="px-5 py-7  col-span-12 sm:col-span-6 lg:col-span-6 xl:col-span-3 "
        >
          Forecast
        </BentoCard>
        <BentoCard
          light
          className="px-5 py-7  col-span-12 lg:col-span-6 xl:col-span-9"
        >
          Summary
        </BentoCard>
      </div>
    </div>
  );
};

export default DashboardPage;
