import classNames from "classnames";
import { convertToCelcius } from "../../../utils/Weather";
import { capitalizeEachWord } from "../../../utils/StringFunc";

interface Props {
  temp: number;
  conditions: string;
}

const CurrentTemperatureTile = ({ temp, conditions }: Props) => {
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
        {capitalizeEachWord(conditions.split(",")[0])}
      </div>
    </div>
  );
};

export default CurrentTemperatureTile;
