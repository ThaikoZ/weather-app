import classNames from "classnames";
import { ReactNode, HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}

const Button = ({ children, className, ...props }: Props) => {
  return (
    <div
      {...props}
      className={classNames(
        className,
        "bg-opacity-15 p-2 bg-black rounded-full active:bg-opacity-25 hover:bg-opacity-20 cursor-pointer transition-colors ease-in flex items-center gap-2.5"
      )}
    >
      {children}
    </div>
  );
};

export default Button;
