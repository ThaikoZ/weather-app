import classNames from "classnames";
import { ReactNode } from "react";

interface Props {
  className?: string;
  light?: boolean;
  children: ReactNode;
}

const BentoCard = ({ className, light = false, children }: Props) => {
  return (
    <div
      className={classNames(
        className,
        { "bg-black bg-opacity-15": !light },
        { "bg-white bg-opacity-15": light },
        "backdrop-blur-md px-5 py-8 text-center text-white transition-transform duration-500 rounded-2xl hover:scale-[101%] overflow-hidden h-[238px] sm:h-auto"
      )}
    >
      {children}
    </div>
  );
};

export default BentoCard;
