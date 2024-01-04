import { useContext } from "react";
import { Box, Divider, IconButton, useTheme } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import SidebarContext from "../context/SidebarContext";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import Notifications from "../components/Notifications";
import Messages from "../components/Messages";
import UserMenu from "../components/UserMenu";
import { ColorModeContext, tokens } from "../assets/theme";

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
      <AppBar position="static" elevation={4}>
        <Toolbar
          sx={{
            backgroundColor: colors.primary[400],
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <IconButton
            sx={{
              display: {
                xs: "block",
                sm: "block",
                md: "block",
                lg: "none",
                xl: "none",
              },
            }}
            size="large"
            edge="start"
            aria-label="menu"
            onClick={handleClick}
          >
            <MenuIcon />
          </IconButton>
          <IconButton
            aria-label="Information"
            sx={{
              display: {
                xs: "none",
                sm: "none",
                md: "none",
                lg: "flex",
                xl: "flex",
              },
            }}
          >
            <InfoOutlinedIcon sx={{ width: "1.5rem", height: "1.5rem" }} />
          </IconButton>
          <Box
            sx={{
              border: `2px solid ${colors.primary[500]}`,
              borderRadius: "4px",
              display: "flex",
              width: "min(75%, 400px)",
            }}
          >
            <InputBase sx={{ flex: 1, ml: 2 }} placeholder="Search" />
            <IconButton type="button" sx={{ p: 1 }}>
              <SearchIcon sx={{ color: colors.primary[500] }} />
            </IconButton>
          </Box>
          <Box sx={{ display: "flex", gap: 1.5 }}>
            <IconButton
              onClick={colorMode.toggleColorMode}
              sx={{
                display: { xs: "none", sm: "none", md: "flex" },
                height: "100%",
              }}
            >
              {theme.palette.mode === "dark" ? (
                <DarkModeOutlinedIcon
                  sx={{ width: "1.5rem", height: "1.5rem" }}
                />
              ) : (
                <LightModeOutlinedIcon
                  sx={{ width: "1.5rem", height: "1.5rem" }}
                />
              )}
            </IconButton>
            <Messages />
            <Notifications />
            <Divider
              orientation="vertical"
              flexItem
              sx={{ display: { xs: "none", sm: "none", md: "flex" } }}
            />
            <UserMenu />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
