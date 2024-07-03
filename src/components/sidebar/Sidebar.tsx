import { CloudIcon } from "@heroicons/react/16/solid";
import {
  Squares2X2Icon,
  MapIcon,
  MapPinIcon,
  Cog6ToothIcon,
  BookmarkIcon,
} from "@heroicons/react/24/outline";
import SidebarMenu from "./SidebarMenu";
import { Outlet } from "react-router-dom";
import classNames from "classnames";
import { useSidebarContext } from "../../context/SidebarContext";
import ToggleCollapseButton from "./ToggleCollapseButton";

const sidebarMenu = [
  { id: "dashboard", href: "/dashboard", Icon: Squares2X2Icon },
  { id: "map", href: "/map", Icon: MapIcon },
  { id: "bookmarks", href: "/bookmark", Icon: BookmarkIcon },
  { id: "localization", href: "/location", Icon: MapPinIcon },
  { id: "settings", href: "/settings", Icon: Cog6ToothIcon },
];

const Sidebar = () => {
  const { isCollapsed } = useSidebarContext();
  return (
    <div className="flex top-0 left-0 h-full fixed">
      <div
        className={classNames(
          { "w-20": isCollapsed },
          { "w-56": !isCollapsed },
          "flex flex-col gap-10  justify-between backdrop-blur-md bg-black bg-opacity-20 shadow-lg px-5 py-8 text-center text-white transition-transform duration-500"
        )}
      >
        <div className="flex flex-col gap-10">
          <div className="flex items-center gap-2.5 font-semibold justify-start p-1">
            <CloudIcon className="size-8" />
            {!isCollapsed && <h1 className="text-xl">Weather App</h1>}
          </div>
          <SidebarMenu menuItems={sidebarMenu} />
        </div>
        <div className="flex justify-end">
          <ToggleCollapseButton />
        </div>
      </div>
      <div className="p-8">
        <Outlet />
      </div>
    </div>
  );
};

export default Sidebar;
