import { useContext, useState } from "react";
import {
  Avatar,
  Badge,
  Box,
  Divider,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
  useTheme
} from "@mui/material";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import ManageAccountsOutlinedIcon from "@mui/icons-material/ManageAccountsOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import PersonAddOutlinedIcon from "@mui/icons-material/PersonAddOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";

import userImage from "../assets/user.png";
import { ColorModeContext, tokens } from "../assets/theme";

export default function UserMenu() {
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  
  return (
    <Box
      sx={{
        alignItems: "center",
        display: "inline-flex",
        flexGrow: 0,
        gap: 2,
      }}
    >
      <Typography
        variant="h6"
        color={colors.primary[100]}
        sx={{ display: { xs: "none", sm: "none", md: "flex" } }}
      >
        John Smith
      </Typography>
      <Tooltip title="">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar alt="Remy Sharp" src={userImage} />
        </IconButton>
      </Tooltip>
      <Menu
        sx={{
          mt: "45px",
          "& .MuiMenu-paper": {
            backgroundColor: colors.primary[400],
          },
        }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        <MenuItem
          sx={{
            display: { xs: "flex", sm: "flex", md: "none" },
            justifyContent: "space-between",
          }}
        >
          <p>Messages</p>
          <IconButton
            size="large"
            aria-label="show 4 new mails"
            color="inherit"
          >
            <Badge badgeContent={4} color="error" />
          </IconButton>
        </MenuItem>
        <MenuItem
          sx={{
            display: { xs: "flex", sm: "flex", md: "none" },
            justifyContent: "space-between",
          }}
        >
          <p>Notifications</p>
          <IconButton
            size="large"
            aria-label="show 17 new notifications"
            color="inherit"
          >
            <Badge badgeContent={17} color="error" />
          </IconButton>
        </MenuItem>
        <Divider sx={{ display: { xs: "flex", sm: "flex", md: "none" } }} />
        <MenuItem>
          <ListItemIcon>
            <PersonOutlinedIcon />
          </ListItemIcon>
          <Typography variant="h5">My Profile</Typography>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <ManageAccountsOutlinedIcon />
          </ListItemIcon>
          <Typography variant="h5">Manage Account(s)</Typography>
        </MenuItem>
        <MenuItem
          onClick={colorMode.toggleColorMode}
          sx={{
            display: { xs: "flex", sm: "flex", md: "none" },
          }}
        >
          <ListItemIcon>
            {theme.palette.mode === "dark" ? (
              <DarkModeOutlinedIcon
                sx={{ width: "1.5rem", height: "1.5rem" }}
              />
            ) : (
              <LightModeOutlinedIcon
                sx={{ width: "1.5rem", height: "1.5rem" }}
              />
            )}
          </ListItemIcon>
          <Typography variant="h5">
            Enable {theme.palette.mode === "dark" ? `light` : `dark`} mode
          </Typography>
        </MenuItem>
        <MenuItem
          sx={{
            display: { xs: "flex", sm: "flex", md: "none" },
          }}
        >
          <ListItemIcon>
            <InfoOutlinedIcon />
          </ListItemIcon>
          <Typography variant="h5">Information</Typography>
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemIcon>
            <PersonAddOutlinedIcon />
          </ListItemIcon>
          <Typography variant="h5">Add another account</Typography>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <SettingsOutlinedIcon />
          </ListItemIcon>
          <Typography variant="h5">Settings</Typography>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <LogoutOutlinedIcon />
          </ListItemIcon>
          <Typography variant="h5">Logout</Typography>
        </MenuItem>
      </Menu>
    </Box>
  );
}
