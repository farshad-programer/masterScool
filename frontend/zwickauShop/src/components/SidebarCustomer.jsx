import React, { useEffect, useMemo, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { SlPuzzle } from "react-icons/sl";
import { MdOutlineCancel } from "react-icons/md";
import { links } from "../data/dummy";
import { useStateContext } from "../contexts/ContextProvider";
import {
  selectAllCategorys,
  useGetCategorysQuery,
} from "../features/categoryApiSlice ";
import { TbCategoryPlus } from "react-icons/tb";

import { useSelector } from "react-redux";
import useClickOutside from "../utilities/useClickOutside";

const SidebarCustomer = () => {
  const sidebarRef = useRef(null);

  useClickOutside(sidebarRef, () => {
    setActiveMenu(false);
  });
  const { activeMenu, setActiveMenu, screenSize, currentColor } =
    useStateContext();
  const {
    data: categorys,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetCategorysQuery();
  let category = useSelector((state) => selectAllCategorys(state, categorys));

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
    <div
      ref={sidebarRef}
      className="ml-3 h-screen scroll-m-11 overflow-auto   pb-10 "
    >
      {activeMenu && (
        <>
          <div className="flex justify-between items-center hover:overflow-hidden">
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
              className="text-2xl  rounded-full p-1 hover:bg-light-gray dark:hover:bg-gray-500 mt-6 mr-4 block dark:text-gray-50 lg:hidden"
            >
              <MdOutlineCancel className="text-4xl" />
            </button>
          </div>
          <div className="mt-10">
            <div>
              <p className="text-gray-400 m-3 mt-4">Category</p>
              <NavLink
                to={`/`}
                onClick={handleCloseSidebaar}
                style={({ isActive }) => ({
                  backgroundColor: isActive ? currentColor : "",
                })}
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                <TbCategoryPlus className="text-2xl" />
                <span className="text-base ">all product</span>
              </NavLink>
              {category.map((link) => (
                <NavLink
                  to={`category/${link._id}`}
                  key={link.id}
                  onClick={handleCloseSidebaar}
                  style={({ isActive }) => ({
                    backgroundColor: isActive ? currentColor : "",
                  })}
                  className={({ isActive }) =>
                    isActive ? activeLink : normalLink
                  }
                >
                  <TbCategoryPlus className="text-xl" />
                  <span className="text-base ">{link.name}</span>
                </NavLink>
              ))}
            </div>
          </div>
          <div>
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
                    <span className="text-base font-eng2 ">{link.name}</span>
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

export default SidebarCustomer;
