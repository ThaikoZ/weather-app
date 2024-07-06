import { useEffect, useState } from "react";
import Avatar from "../components/Avatar";
import BentoCard from "../components/BentoCard";
import CurrentWeatherCard from "../components/dashboard/current-weather/CurrentWeatherCard";
import NotificationBell from "../components/NotificationBell";
import SearchInput from "../components/SearchInput";
import { MultiWeatherInterface, WeatherInterface } from "../utils/Weather";
import MapCard from "../components/dashboard/map/MapCard";
import axios from "axios";
import PopularCitiesCard from "../components/dashboard/popular-cities/PopularCitiesCard";
import { useSearchParams } from "react-router-dom";

const DEFAULT_CITY = "Warsaw";

const DashboardPage = () => {
  const [searchParams] = useSearchParams();
  const [data, setData] = useState<WeatherInterface>();
  const [popularData, setPopularData] = useState<MultiWeatherInterface>();

  useEffect(() => {
    const fetchParametrized = async () => {
      const location = searchParams.get("location") || DEFAULT_CITY;
      const URL = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${
        import.meta.env.VITE_WEATHER_API_KEY
      }`;

      axios
        .get<WeatherInterface>(URL)
        .then((res) => {
          setData(res.data);
        })
        .catch((err) => console.error(err));
    };

    const fetchPopularCities = async () => {
      const URL =
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timelinemulti?key=${
          import.meta.env.VITE_WEATHER_API_KEY
        }&locations=` + encodeURIComponent("London|Paris|Tokyo|Berlin|Warsaw");

      axios
        .get<MultiWeatherInterface>(URL)
        .then((res) => {
          setPopularData(res.data);
        })
        .catch((err) => console.error(err));
    };

    fetchParametrized();
    // fetchPopularCities();
  }, [searchParams]);

  return (
    <div className="md:h-[100vh] selection:bg-none flex flex-col gap-10 w-full p-10">
      <div className="flex justify-between w-full gap-5 h-10">
        <div>
          <SearchInput />
        </div>
        <div className="flex items-center gap-2.5">
          <NotificationBell /> <Avatar />
        </div>
      </div>
      <div className="w-full grid grid-cols-12 gap-5 space-5">
        <CurrentWeatherCard
          data={data?.currentConditions}
          className=" col-span-12 sm:col-span-6 lg:col-span-4 xl:col-span-3"
        />
        <MapCard
          className="h-[338px] sm:h-full"
          lat={data?.latitude}
          lng={data?.longitude}
        />
        <PopularCitiesCard className="h-full" data={popularData} />
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
