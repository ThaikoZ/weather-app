import classNames from "classnames";
import { useLocation } from "react-router-dom";
import { useSidebarContext } from "../../context/SidebarContext";

export interface SidebarButtonInterface {
  id: string;
  href: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

interface Props {
  item: SidebarButtonInterface;
  onClick?: () => void;
  className?: string;
}

const SidebarButton = ({ item, onClick, className }: Props) => {
  const { isCollapsed, collapseSidebar } = useSidebarContext();
  const { pathname } = useLocation();

  const active = `/${item.id}` == pathname;

  const getTitle = () => {
    return item.id[0].toUpperCase() + item.id.slice(1);
  };

  return (
    <div
      className={classNames(
        { "bg-opacity-20": active },
        { "bg-opacity-0": !active },
        "p-2 bg-black rounded-lg active:bg-opacity-25 hover:bg-opacity-20 cursor-pointer transition-colors ease-in flex items-center gap-2.5",
        className
      )}
      onClick={() => {
        onClick && onClick();
        collapseSidebar();
      }}
    >
      <item.Icon className="size-6" />
      {!isCollapsed && <h1>{getTitle()}</h1>}
    </div>
  );
};

export default SidebarButton;
