import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FiSettings } from "react-icons/fi";

import Sidebar from "../Sidebar";
import Navbar from "../Navbar";
import { useStateContext } from "../../contexts/ContextProvider";
// import Ecommerce from "./pages/Ecommerce";
// import Orders from "./pages/Orders";
// import Employees from "./pages/Employees";
// import Customers from "./pages/Customers";
// import Calendar from "./pages/Calendar";
// import Kanban from "./pages/Kanban";
// import ColorPicker from "./pages/ColorPicker";
// import Line from "./pages/Charts/LineChart";
// import Area from "./pages/Charts/Area";
// import Bar from "./pages/Charts/Bar";
// import Pie from "./pages/Charts/Pie";

// import { loadCldr } from "@syncfusion/ej2-base";
// import * as gregorian from "cldr-data/main/fa/ca-gregorian.json";
// import * as numbers from "cldr-data/main/fa/numbers.json";
// import * as timeZoneNames from "cldr-data/main/fa/timeZoneNames.json";
// import * as numberingSystems from "cldr-data/supplemental/numberingSystems.json";
// import * as weekData from "cldr-data/supplemental/weekData.json";
// import Editor from "./pages/Editor";
// import Financial from "./pages/Charts/Financial";
// import ColorMapping from "./pages/Charts/ColorMapping";
// import Pyramid from "./pages/Charts/Pyramid";
// import Stacked from "./pages/Charts/Stacked";
import ThemeSettings from "../ThemeSettings";
import { useGetProductsQuery } from "../../features/productApiSlice";
import { useEffect } from "react";
import SidebarCustomer from "../SidebarCustomer";
import Ecommerce from "../Ecommerce";
import ProductSingel from "../ProductSingel";
import { Outlet } from "react-router-dom";
import React from "react";

export const Layout = () => {
  //   loadCldr(numberingSystems, gregorian, numbers, timeZoneNames, weekData);

  const {
    activeMenu,
    themeSettings,
    setThemeSettings,
    currentColor,
    currentMode,
    isClicked,
  } = useStateContext();

  return (
    <div className={currentMode === "Dark" ? "dark" : ""}>
      <div className="flex relative h-full overflow-auto dark:bg-main-dark-bg">
        {activeMenu ? (
          <div
            className={`w-72 fixed shrink-0  dark:bg-secondary-dark-bg bg-white`}
            style={{ zIndex: isClicked.cart ? "10" : "10009" }}
          >
            <SidebarCustomer />
          </div>
        ) : (
          <div className="w-0 dark:bg-secondary-dark-bg">
            <SidebarCustomer />
          </div>
        )}
        <div
          className={`dark:bg-main-dark-bg bg-gray-100 h-screen max-w-full grow ${
            activeMenu && " lg:pl-72"
          }`}
        >
          <div className="sticky top-0 left-0 bg-main-bg dark:bg-main-dark-bg navbar">
            <Navbar />
          </div>

          <div className="h-screan">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
