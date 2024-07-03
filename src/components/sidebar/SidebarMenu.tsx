import SidebarButton, { SidebarButtonInterface } from "./SidebarButton";

import { useNavigate } from "react-router-dom";

interface Props {
  menuItems: SidebarButtonInterface[];
}

const SidebarMenu = ({ menuItems }: Props) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-5">
      {menuItems.map((item) => (
        <SidebarButton
          key={item.id}
          item={item}
          onClick={() => navigate(item.href!)}
        />
      ))}
    </div>
  );
};

export default SidebarMenu;
