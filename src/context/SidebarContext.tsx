import { createContext, useState, useContext, PropsWithChildren } from "react";

const SidebarContext = createContext({
  isCollapsed: true,
  toggleCollapse: () => {},
  collapseSidebar: () => {},
});

export const useSidebarContext = () => useContext(SidebarContext);

export const SidebarContextProvider = ({ children }: PropsWithChildren) => {
  const [isCollapsed, setCollapsed] = useState(true);

  const toggleCollapse = () => {
    setCollapsed((prevCollapsed) => !prevCollapsed);
  };
  const collapseSidebar = () => {
    setCollapsed(true);
  };

  return (
    <SidebarContext.Provider
      value={{ isCollapsed, toggleCollapse, collapseSidebar }}
    >
      {children}
    </SidebarContext.Provider>
  );
};
