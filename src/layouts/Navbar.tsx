import { Box, IconButton, useTheme } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../assets/theme";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import SidebarContext from "../context/SidebarContext";

export default function Navbar() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  const { setHideSidebar } = useContext(SidebarContext);

  const handleClick = () => {
    setHideSidebar((prevState) => !prevState);
  };

  return (
    <Box display="flex" justifyContent="space-between" p={2} width="100%">
      <AppBar position="static">
        <Toolbar
          sx={{
            backgroundColor: colors.primary[400],
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <IconButton
            sx={{ display: {
              md: "block",
              lg: "block",
              xl: "none"
            } }}
            size="large"
            edge="start"
            aria-label="menu"
            onClick={handleClick}
          >
            <MenuIcon />
          </IconButton>
          <Box
            sx={{
              backgroundColor: colors.primary[500],
              borderRadius: "3px",
              display: "flex"
            }}
          >
            <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
            <IconButton type="button" sx={{ p: 1 }}>
              <SearchIcon />
            </IconButton>
          </Box>
          <Box sx={{ display: "flex" }}>
            <IconButton onClick={colorMode.toggleColorMode}>
              {theme.palette.mode === "dark" ? (
                <DarkModeOutlinedIcon />
              ) : (
                <LightModeOutlinedIcon />
              )}
            </IconButton>
            <IconButton>
              <NotificationsOutlinedIcon />
            </IconButton>
            <IconButton>
              <PersonOutlinedIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
