import { useState, useContext } from "react";
import { Avatar, Box, IconButton, Typography, useTheme } from "@mui/material";
import { Sidebar as ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { NavLink } from "react-router-dom";
import {
  ExploreOutlined,
  DataUsageOutlined,
  RequestQuoteOutlined,
  AssessmentOutlined,
  SwapVertOutlined,
  AttachMoneyOutlined,
  AccountBalanceOutlined,
  MenuOutlined,
  SettingsOutlined,
} from "@mui/icons-material";
import { tokens } from "../assets/theme";
import SidebarContext from "../context/SidebarContext";
import Logo from "../assets/logo.svg";

export default function Sidebar() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
  const { hideSidebar, setHideSidebar } = useContext(SidebarContext);

  const handleClick = () => {
    window.innerWidth <= 900 &&
      setHideSidebar((prevState): boolean => {
        if (prevState === true) {
          return !prevState;
        } else {
          return prevState;
        }
      });
  };

  return (
    <Box
      sx={{
        borderRight: `1px solid ${colors.primary[500]} !important`,
        display: {
          xs: hideSidebar ? "block" : "none",
          sm: hideSidebar ? "block" : "none",
          md: hideSidebar ? "none" : "block",
        },
        "& .ps-sidebar-root": {
          border: "none",
        },
        "& .ps-sidebar-container": {
          background: `${colors.primary[400]} !important`,
          height: "100%",
          minHeight: "100vh",
        },
        "& .ps-menu-icon svg": {
          fill: `${colors.primary[100]} !important`,
        },
        "& .ps-menu-root .MuiBox-root li a": {
          borderRadius: "15px",
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed} className={`hidden`} width="290px">
        <Menu
          menuItemStyles={{
            button: {
              [`&:hover`]: {
                backgroundColor: `${colors.primary[500]}`,
                color: "#b6c8d9",
              },
              [`&.active`]: {
                backgroundColor: `${colors.primary[500]}`,
                color: "#b6c8d9",
              },
            },
          }}
        >
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlined /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Box sx={{ alignItems: "center", display: "flex", flexDirection: "row" }}>
                  <Avatar src={Logo} sx={{ height: 25, width: 25 }} />
                  <Typography variant="h3" color={colors.grey[100]} ml={0.5}>
                    FinTrack
                  </Typography>
                </Box>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlined />
                </IconButton>
              </Box>
            )}
          </MenuItem>
          <Box paddingInline={isCollapsed ? undefined : "5%"}>
            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Menu
            </Typography>
            <MenuItem
              icon={<ExploreOutlined />}
              onClick={handleClick}
              component={<NavLink to="/" />}
            >
              <Typography
                style={{
                  color: colors.grey[100],
                }}
              >
                Overview
              </Typography>
            </MenuItem>
            <MenuItem
              icon={<DataUsageOutlined />}
              onClick={handleClick}
              component={<NavLink to="/budget" />}
            >
              <Typography
                style={{
                  color: colors.grey[100],
                }}
              >
                Budget
              </Typography>
            </MenuItem>
            <MenuItem
              icon={<RequestQuoteOutlined />}
              onClick={handleClick}
              component={<NavLink to="/bills" />}
            >
              <Typography
                style={{
                  color: colors.grey[100],
                }}
              >
                Bills
              </Typography>
            </MenuItem>
            <MenuItem
              icon={<AssessmentOutlined />}
              onClick={handleClick}
              component={<NavLink to="/reports" />}
            >
              <Typography
                style={{
                  color: colors.grey[100],
                }}
              >
                Reports & Analytics
              </Typography>
            </MenuItem>
            <MenuItem
              icon={<SwapVertOutlined />}
              onClick={handleClick}
              component={<NavLink to="/debt" />}
            >
              <Typography
                style={{
                  color: colors.grey[100],
                }}
              >
                Debt Management
              </Typography>
            </MenuItem>
            <MenuItem
              icon={<AttachMoneyOutlined />}
              onClick={handleClick}
              component={<NavLink to="/investments" />}
            >
              <Typography
                style={{
                  color: colors.grey[100],
                }}
              >
                Investments
              </Typography>
            </MenuItem>
            <MenuItem
              icon={<AccountBalanceOutlined />}
              onClick={handleClick}
              component={<NavLink to="/networth" />}
            >
              <Typography
                style={{
                  color: colors.grey[100],
                }}
              >
                Net Worth
              </Typography>
            </MenuItem>
            <MenuItem
              icon={<SettingsOutlined />}
              onClick={handleClick}
              component={<NavLink to="/settings" />}
            >
              <Typography
                style={{
                  color: colors.grey[100],
                }}
              >
                Settings
              </Typography>
            </MenuItem>
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
}
