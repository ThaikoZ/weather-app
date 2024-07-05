import classNames from "classnames";
import BentoCard from "../../BentoCard";
import { Map } from "@vis.gl/react-google-maps";
import Button from "../../Button";
import { EllipsisVerticalIcon, MapPinIcon } from "@heroicons/react/16/solid";
import MapSkeleton from "./MapSkeleton";

interface Props {
  className?: string;
  lat: number | undefined;
  lng: number | undefined;
}

const MapCard = ({ className, lat, lng }: Props) => {
  return (
    <BentoCard
      className={classNames(
        className,
        "col-span-12 sm:col-span-6 lg:col-span-4 xl:col-span-6"
      )}
    >
      {lat && lng ? (
        <>
          <Map
            style={{ width: "105%", height: "105%" }}
            defaultCenter={{ lat: lat!, lng: lng! }}
            defaultZoom={11}
            gestureHandling={"greedy"}
            disableDefaultUI={true}
          />
          <Button className="absolute rounded-full w-9 h-9 flex items-center justify-center top-[20px] right-[20px] bg-opacity-35 hover:bg-opacity-40 active:bg-opacity-45">
            <EllipsisVerticalIcon />
          </Button>
          <Button className="absolute rounded-full w-9 h-9 flex items-center justify-center top-[20px] right-[60px] bg-opacity-35 hover:bg-opacity-40 active:bg-opacity-45">
            <MapPinIcon />
          </Button>
        </>
      ) : (
        <MapSkeleton />
      )}
    </BentoCard>
  );
};

export default MapCard;
