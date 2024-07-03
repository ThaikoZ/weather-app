const DashboardPage = () => {
  return (
    <div className="flex flex-col gap-10 w-full p-10">
      <div className="flex justify-between w-full">
        <div className="bg-white">Search Bar</div>
        <div className="bg-white">Notify + Avatar</div>
      </div>
      <div className="w-full grid grid-cols-12 gap-5 space-5">
        <div className="col-span-12 sm:col-span-6 lg:col-span-3 bg-rose-500">
          Current Weather
        </div>
        <div className="col-span-12 sm:col-span-6 lg:col-span-6 bg-rose-500">
          Map
        </div>
        <div className="col-span-12 sm:col-span-6 lg:col-span-3 bg-rose-500">
          Popular Cities
        </div>
        <div className="col-span-12 sm:col-span-6 lg:col-span-3 bg-rose-500">
          Forecast
        </div>
        <div className="col-span-12 lg:col-span-9 bg-rose-500">Summary</div>
      </div>
    </div>
  );
};

export default DashboardPage;
