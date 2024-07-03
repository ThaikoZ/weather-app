import { createContext, useState, useContext, PropsWithChildren } from "react";

const SidebarContext = createContext({
  isCollapsed: true,
  toggleCollapse: () => {},
});

export const useSidebarContext = () => useContext(SidebarContext);

export const SidebarContextProvider = ({ children }: PropsWithChildren) => {
  const [isCollapsed, setCollapsed] = useState(true);

  const toggleCollapse = () => {
    setCollapsed((prevCollapsed) => !prevCollapsed);
  };

  return (
    <SidebarContext.Provider value={{ isCollapsed, toggleCollapse }}>
      {children}
    </SidebarContext.Provider>
  );
};
