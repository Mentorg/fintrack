import React from 'react';

interface SidebarContextProps {
  hideSidebar: boolean;
  setHideSidebar: React.Dispatch<React.SetStateAction<boolean>>;
}

const SidebarContext = React.createContext<SidebarContextProps>({
  hideSidebar: false,
  setHideSidebar: () => {},
});

export default SidebarContext;