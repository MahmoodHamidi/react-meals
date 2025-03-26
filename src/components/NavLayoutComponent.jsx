import { Outlet } from "react-router-dom";
import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";
import { useContext } from "react";
import { DarkModeContext } from "../context/DarkModeContext";

const NavLayoutComponent = () => {
  const { isDarkMode } = useContext(DarkModeContext);
  return (
    <>
      <HeaderComponent />

      <div
        className={`${isDarkMode ? "dark" : ""} bg-slate-300 dark:bg-base-200`}
      >
        <Outlet />
      </div>
      <FooterComponent />
    </>
  );
};

export default NavLayoutComponent;
