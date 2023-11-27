import { MenuItem } from "react-pro-sidebar";
import { NavLink } from "react-router-dom";
import { Typography } from "@mui/material";
import { CSSProperties, ReactNode } from "react";

type MenuLinkProps = {
  icon: ReactNode;
  onClick: () => void;
  linkTo: string;
  style: CSSProperties;
  text: string;
}

const MenuLink = ({ icon, onClick, linkTo, style, text }: MenuLinkProps) => {
  return (
    <MenuItem
      icon={icon}
      onClick={onClick}
      component={<NavLink to={linkTo} />}
    >
      <Typography style={style}>{text}</Typography>
    </MenuItem>
  );
};

export default MenuLink;