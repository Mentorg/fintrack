import { useState, useContext } from "react";
import { Avatar, Box, IconButton, Typography, useTheme } from "@mui/material";
import { Sidebar as ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
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
import MenuLink from "../components/MenuLink";

export default function Sidebar() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
  const { hideSidebar, setHideSidebar } = useContext(SidebarContext);

  const handleClick = () => {
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
        boxShadow: 4,
        display: {
          xs: hideSidebar ? "block" : "none",
          sm: hideSidebar ? "block" : "none",
          md: hideSidebar ? "block" : "none",
          lg: hideSidebar ? "none" : "block",
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
              [`&:hover, &.active`]: {
                backgroundColor: `${colors.primary[500]}`,
                "& .ps-menu-label p": {
                  color: `${colors.blueAccent[300]} !important`,
                },
                "& .ps-menu-icon svg": {
                  fill: `${colors.blueAccent[300]} !important`
                },
              },
            },
          }}
        >
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlined /> : undefined}
            style={{
              margin: "20px 0 20px 0",
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
                <Box
                  sx={{
                    alignItems: "center",
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <Avatar src={Logo} sx={{ height: 25, width: 25 }} />
                  <Typography variant="h3" color={colors.grey[100]} ml={1}>
                    FinTrack
                  </Typography>
                </Box>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlined />
                </IconButton>
              </Box>
            )}
          </MenuItem>
          <Box paddingInline={isCollapsed ? undefined : "5%"} sx={{ marginBlock: 5 }}>
            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 30px" }}
            >
              Menu
            </Typography>
            <MenuLink
              icon={<ExploreOutlined color="secondary" />}
              onClick={handleClick}
              linkTo="/"
              style={{ color: colors.grey[100] }}
              text="Overview"
            />
            <MenuLink
              icon={<DataUsageOutlined />}
              onClick={handleClick}
              linkTo="/budget"
              style={{ color: colors.grey[100] }}
              text="Budget"
            />
            <MenuLink
              icon={<RequestQuoteOutlined />}
              onClick={handleClick}
              linkTo="/bills"
              style={{ color: colors.grey[100] }}
              text="Bills"
            />
            <MenuLink
              icon={<AssessmentOutlined />}
              onClick={handleClick}
              linkTo="/reports"
              style={{ color: colors.grey[100] }}
              text="Reports & Analytics"
            />
            <MenuLink
              icon={<SwapVertOutlined />}
              onClick={handleClick}
              linkTo="/debt"
              style={{ color: colors.grey[100] }}
              text="Debt Management"
            />
            <MenuLink
              icon={<AttachMoneyOutlined />}
              onClick={handleClick}
              linkTo="/investments"
              style={{ color: colors.grey[100] }}
              text="Investments"
            />
            <MenuLink
              icon={<AccountBalanceOutlined />}
              onClick={handleClick}
              linkTo="/networth"
              style={{ color: colors.grey[100] }}
              text="Net Worth"
            />
            <MenuLink
              icon={<SettingsOutlined />}
              onClick={handleClick}
              linkTo="/settings"
              style={{ color: colors.grey[100] }}
              text="Settings"
            />
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
}
