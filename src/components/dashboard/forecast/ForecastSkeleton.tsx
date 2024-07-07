const ForecastSkeleton = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex justify-between">
        <div className="skeleton h-5 w-28 py-1 skeleton-white"></div>
      </div>
      <div className="flex flex-col gap-3">
        {[1, 2, 3, 4, 5].map((item) => (
          <div
            key={item}
            className="skeleton h-[2.5rem] py-2 skeleton-white"
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ForecastSkeleton;
