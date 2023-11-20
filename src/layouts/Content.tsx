import { useContext } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import SidebarContext from "../context/SidebarContext";

export default function Content() {
  const { setHideSidebar } = useContext(SidebarContext);

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
    <main>
      <Navbar />
      <div onClick={handleClick}>
        <Outlet />
      </div>
    </main>
  );
}
