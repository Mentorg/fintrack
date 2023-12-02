import { useState } from "react";
import {
  Badge,
  Box,
  Divider,
  IconButton,
  Menu,
  ListItemButton,
  ListItemIcon,
  Typography,
  useTheme,
  Button,
} from "@mui/material";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import { tokens } from "../assets/theme";
import { notificationsData } from "../data/communicationsData";

export default function Notifications() {
  const [openNotifications, setOpenNotifications] =
    useState<null | HTMLElement>(null);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const handleOpenNotifications = (event: React.MouseEvent<HTMLElement>) => {
    setOpenNotifications(event?.currentTarget);
  };

  const handleCloseNotifications = () => {
    setOpenNotifications(null);
  };

  return (
    <Box>
      <IconButton
        size="large"
        aria-label="show new notifications"
        sx={{ display: { xs: "none", sm: "none", md: "flex" } }}
        onClick={handleOpenNotifications}
      >
        <Badge color="error" variant="dot">
          <NotificationsOutlinedIcon
            sx={{ width: "1.5rem", height: "1.5rem" }}
          />
        </Badge>
      </IconButton>
      <Menu
        sx={{
          mt: "45px",
          "& .MuiMenu-paper": {
            backgroundColor: colors.primary[400],
          },
        }}
        anchorEl={openNotifications}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(openNotifications)}
        onClose={handleCloseNotifications}
      >
        {notificationsData.map((notification) => (
          <Box key={notification.id}>
            <ListItemButton
              component="a"
              sx={{
                display: "grid",
                gridTemplateColumns: "2rem 3fr",
              }}
            >
              <ListItemIcon>
                { !notification.read && <Badge color="secondary" variant="dot" /> }
              </ListItemIcon>
              <Box>
                <Typography m={0} variant="h6" sx={{
                  fontWeight: !notification.read ? "700" : "500"
                }}>
                  {notification.message}
                </Typography>
                <Box sx={{ alignItems: "center", display: "flex" }}>
                  <Typography m={0} paragraph>
                    {notification.date}
                  </Typography>
                  <Button
                    sx={{
                      color: colors.blueAccent[400],
                      ml: "auto",
                      textTransform: "none",
                    }}
                    variant="text"
                  >
                    Go to {notification.type}
                  </Button>
                </Box>
              </Box>
            </ListItemButton>
            <Divider sx={{ backgroundColor: colors.grey[900] }} />
          </Box>
        ))}
      </Menu>
    </Box>
  );
}
