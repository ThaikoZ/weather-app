const PopularCitiesCardSkeleton = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex justify-between">
        <div className="skeleton h-5 w-28 py-[0.45rem] skeleton-glass-morphizm skeleton-white"></div>
        <div className="skeleton h-5 w-20 py-[0.45rem] skeleton-glass-morphizm skeleton-white"></div>
      </div>
      <div className="flex flex-col gap-3">
        {[1, 2, 3, 4, 5].map(() => (
          <div className="skeleton h-[2.5rem] py-[0.45rem] skeleton-glass-morphizm skeleton-white"></div>
        ))}
      </div>
    </div>
  );
};

export default PopularCitiesCardSkeleton;
