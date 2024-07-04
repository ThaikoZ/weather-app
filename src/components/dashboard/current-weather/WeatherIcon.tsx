import Icon from "../../Icon";
import { IconProps } from "weather-icons-react";

interface Props {
  iconProp: React.FC<IconProps>;
}

const WeatherIcon = ({ iconProp }: Props) => {
  return (
    <div className="w-36">
      <Icon Icon={iconProp} />
    </div>
  );
};

export default WeatherIcon;
