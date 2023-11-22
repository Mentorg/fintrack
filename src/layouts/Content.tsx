import { useContext } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import SidebarContext from "../context/SidebarContext";
import { Box } from "@mui/material";

export default function Content() {
  const { setHideSidebar } = useContext(SidebarContext);

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
    <main>
      <Navbar />
      <Box onClick={handleClick}>
        <Outlet />
      </Box>
    </main>
  );
}
