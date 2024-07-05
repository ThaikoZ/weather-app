const CurrentWeatherSkeleton = () => {
  return (
    <div className="flex w-full flex-col gap-4 z-10">
      <div className="skeleton skeleton-glass-morphizm h-4 w-32"></div>
      <div className="skeleton skeleton-glass-morphizm h-4 w-28"></div>
      <div className="flex  gap-5">
        <div className="skeleton skeleton-glass-morphizm h-32 w-full"></div>
        <div className="skeleton skeleton-glass-morphizm h-32 w-full"></div>
      </div>
      <div className="flex flex-col gap-3">
        <div className="skeleton skeleton-glass-morphizm h-10 w-full"></div>
        <div className="skeleton skeleton-glass-morphizm h-4 w-full"></div>
      </div>
    </div>
  );
};

export default CurrentWeatherSkeleton;
