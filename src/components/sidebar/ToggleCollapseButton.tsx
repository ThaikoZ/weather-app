import { useSidebarContext } from "../../context/SidebarContext";
import {
  ArrowRightStartOnRectangleIcon,
  ArrowLeftStartOnRectangleIcon,
} from "@heroicons/react/24/outline";

const ToggleCollapseButton = () => {
  const { isCollapsed, toggleCollapse } = useSidebarContext();
  return (
    <div
      className="p-2 bg-black bg-opacity-0 rounded-lg active:bg-opacity-25 hover:bg-opacity-20 cursor-pointer transition-colors ease-in flex items-center gap-2.5"
      onClick={toggleCollapse}
    >
      {isCollapsed ? (
        <ArrowRightStartOnRectangleIcon className="size-6" />
      ) : (
        <ArrowLeftStartOnRectangleIcon className="size-6" />
      )}
    </div>
  );
};

export default ToggleCollapseButton;
