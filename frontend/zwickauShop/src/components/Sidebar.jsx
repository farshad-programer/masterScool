import React, { useMemo } from "react";
import { Link, NavLink } from "react-router-dom";
import { SlPuzzle } from "react-icons/sl";

import { MdOutlineCancel } from "react-icons/md";
import { links } from "../data/dummy";
import { useStateContext } from "../contexts/ContextProvider";

const Sidebar = () => {
  const { activeMenu, setActiveMenu, screenSize, currentColor } =
    useStateContext();

  const handleCloseSidebaar = useMemo(
    () => () => {
      if (activeMenu && screenSize <= 1024) {
        setActiveMenu(false);
      }
    },
    [activeMenu]
  );

  const activeLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2";
  const normalLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray text-md m-2";

  return (
    <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
      {activeMenu && (
        <>
          <div className="flex justify-between items-center">
            <Link
              to="/"
              onClick={handleCloseSidebaar}
              className="flex items-center gap-3 ml-3 mt-4 text-xl font-bold tracking-tight dark:text-white text-slate-900"
            >
              <span className="border-2 border-gray-500 rounded-full  p-[5px]  flex items-center justify-center">
                <SlPuzzle className="text-xl" />
              </span>
              <span className="font-Playfair font-light  italic text-3xl -tracking-normal">
                Zwickau S
                <span className="font-Playfair font-normal  italic text-2xl pt-1 -tracking-wid">
                  hop
                </span>
              </span>
            </Link>

            <button
              type="button"
              onClick={() => {
                setActiveMenu((prev) => !prev);
              }}
              className="text-xl rounded-full p-1 hover:bg-light-gray dark:hover:bg-gray-500 mt-4 mr-4 block dark:text-gray-50 lg:hidden"
            >
              <MdOutlineCancel />
            </button>
          </div>
          <div className="mt-10">
            {links.map((item) => (
              <div key={item.title}>
                <p className="text-gray-400 m-3 mt-4">{item.title}</p>
                {item.links.map((link) => (
                  <NavLink
                    to={`/${link.to}`}
                    key={link.name}
                    onClick={handleCloseSidebaar}
                    style={({ isActive }) => ({
                      backgroundColor: isActive ? currentColor : "",
                    })}
                    className={({ isActive }) =>
                      isActive ? activeLink : normalLink
                    }
                  >
                    {link.icon}
                    <span className="text-base">{link.name}</span>
                  </NavLink>
                ))}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
