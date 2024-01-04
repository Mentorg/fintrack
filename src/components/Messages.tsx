import { useState } from "react";
import {
  Badge,
  Box,
  Divider,
  IconButton,
  ListItemButton,
  ListItemIcon,
  Menu,
  Typography,
  useTheme,
} from "@mui/material";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import { tokens } from "../assets/theme";
import { messagesData } from "../data/communicationsData";

export default function Messages() {
  const [openMessages, setOpenMessages] = useState<null | HTMLElement>(null);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const handleOpenMessages = (event: React.MouseEvent<HTMLElement>) => {
    setOpenMessages(event?.currentTarget);
  };

  const handleCloseMessages = () => {
    setOpenMessages(null);
  };

  return (
    <Box>
      <IconButton
        size="large"
        aria-label="show new mails"
        sx={{ display: { xs: "none", sm: "none", md: "flex" } }}
        onClick={handleOpenMessages}
      >
        <Badge color="error" variant="dot">
          <MailOutlineOutlinedIcon sx={{ width: "1.5rem", height: "1.5rem" }} />
        </Badge>
      </IconButton>
      <Menu
        sx={{
          mt: "45px",
          "& .MuiMenu-paper": {
            backgroundColor: colors.primary[400],
          },
        }}
        anchorEl={openMessages}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(openMessages)}
        onClose={handleCloseMessages}
      >
        {messagesData.map((message) => (
          <Box key={message.id}>
            <ListItemButton
              component="a"
              sx={{
                display: "grid",
                gridTemplateColumns: "2rem 3fr",
              }}
            >
              <ListItemIcon>
                { !message.read && <Badge color="secondary" variant="dot" />}
              </ListItemIcon>
              <Box>
                <Typography m={0} variant="h6" sx={{ 
                  fontWeight: !message.read ? "700" : "500"
                 }}>
                  {message.content}
                </Typography>
                <Box sx={{ alignItems: "center", display: "flex" }}>
                  <Typography m={0} paragraph>
                    {message.timestamp}
                  </Typography>
                  <Typography
                    sx={{
                      color: colors.blueAccent[300],
                      ml: "auto",
                      textTransform: "none",
                    }}
                    variant="h6"
                  >
                    {message.sender}
                  </Typography>
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
