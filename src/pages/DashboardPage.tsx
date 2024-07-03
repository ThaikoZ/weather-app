import Avatar from "../components/Avatar";
import NotificationBell from "../components/NotificationBell";
import SearchInput from "../components/SearchInput";

const DashboardPage = () => {
  return (
    <div className="selection:bg-none flex flex-col gap-10 w-full p-10">
      <div className="flex justify-between w-full gap-5 h-10">
        <div className="">
          <SearchInput />
        </div>
        <div className="flex items-center gap-2.5">
          <NotificationBell /> <Avatar />
        </div>
      </div>
      <div className="w-full grid grid-cols-12 gap-5 space-5">
        <div className="col-span-12 sm:col-span-6 lg:col-span-3 bg-indigo-500">
          Current Weather
        </div>
        <div className="col-span-12 sm:col-span-6 lg:col-span-6 bg-indigo-500">
          Map
        </div>
        <div className="col-span-12 sm:col-span-6 lg:col-span-3 bg-indigo-500">
          Popular Cities
        </div>
        <div className="col-span-12 sm:col-span-6 lg:col-span-3 bg-indigo-500">
          Forecast
        </div>
        <div className="col-span-12 lg:col-span-9 bg-indigo-500">Summary</div>
      </div>
    </div>
  );
};

export default DashboardPage;
