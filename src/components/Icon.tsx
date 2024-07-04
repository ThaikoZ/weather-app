import classNames from "classnames";
import React from "react";
import { IconProps } from "weather-icons-react";

interface Props {
  Icon: React.FC<IconProps>;
  className?: string;
}

const Icon = ({ Icon, className }: Props) => {
  return (
    <Icon
      className={classNames(className, "size-36 h-fit fill-white")}
      color="#000"
    />
  );
};

export default Icon;
