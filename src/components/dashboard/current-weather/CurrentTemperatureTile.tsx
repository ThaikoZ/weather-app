import classNames from "classnames";
import { convertToCelcius } from "../../../utils/Weather";

interface Props {
  temp: number;
  conditions: string;
}

const CurrentTemperatureTile = ({ temp, conditions }: Props) => {
  const capitalizeEachWord = (str: string): string => {
    if (!str) return "";
    return str
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
  };

  return (
    <div className="w-fit xsm:mt-3 sm:mt-0 md:mt-3 ms-5 ">
      <div className="flex">
        <div className="text-8xl font-bold">
          {Math.round(convertToCelcius(temp))}
        </div>
        <div className=" text-3xl font-medium">°C</div>
      </div>
      <div
        className={classNames(
          { "ps-3": temp < 0 },
          "text-center text-xl font-regular"
        )}
      >
        {capitalizeEachWord(conditions)}
      </div>
    </div>
  );
};

export default CurrentTemperatureTile;
