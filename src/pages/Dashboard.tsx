import { useState } from "react";
import { ColorModeContext, useMode } from "../assets/theme";
import Sidebar from "../layouts/Sidebar";
import { ThemeProvider } from "@emotion/react";
import { Box, CssBaseline } from "@mui/material";
import Content from "../layouts/Content";
import SidebarContext from "../context/SidebarContext";

export default function Dashboard() {
  const { theme, toggleColorMode } = useMode("light");
  const [hideSidebar, setHideSidebar] = useState(false);

  return (
    <ColorModeContext.Provider value={{ toggleColorMode }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box className="app">
          <SidebarContext.Provider value={{ hideSidebar, setHideSidebar }}>
            <Sidebar />
            <Content />
          </SidebarContext.Provider>
        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}