import React, { useEffect } from "react";
import { useStateContext } from "../contexts/ContextProvider";

import { AiOutlineMenu } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { BsChatLeft } from "react-icons/bs";
import { RiNotification3Line } from "react-icons/ri";
import avatar from "../data/avatar.jpg";
import { MdKeyboardArrowDown } from "react-icons/md";
import Cartm from "./cart";

// import Cart from "./Cart";
// import Chat from "./Chat";
// import Notification from "./Notification";
// import UserProfile from "./UserProfile";

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <button
    type="button"
    onClick={customFunc}
    data-tip={title}
    style={{ color }}
    className="relative avatar text-xl popup-down  rounded-full p-3 hover:bg-gray-100"
  >
    <span
      style={{ background: dotColor }}
      className="absolute inline-flex  rounded-full h-2 w-2 right-2 top-2"
    />
    {icon}
  </button>
);

const Navbar = () => {
  const {
    setActiveMenu,
    isClicked,
    handleClick,
    screenSize,
    setScreenSize,
    currentColor,
  } = useStateContext();

  // useEffect(() => {
  //   const handleResize = () => setScreenSize(window.innerWidth);
  //   window.addEventListener("resize", handleResize);
  //   handleResize();
  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);
  // useEffect(() => {
  //   if (screenSize <= 900) {
  //     setActiveMenu(true);
  //   } else {
  //     setActiveMenu(false);
  //   }
  // }, [screenSize]);

  return (
    <div className="flex dark:shadow-gray-800 shadow-sm items-center justify-between m-2 shadow-gray-200 relative ">
      <NavButton
        title="منو"
        customFunc={() => setActiveMenu((prev) => !prev)}
        color={currentColor}
        icon={<AiOutlineMenu />}
      />

      <div className="flex flex-row-reverse">
        <NavButton
          title="سبد خرید"
          customFunc={() => handleClick("cart")}
          color={currentColor}
          icon={<FiShoppingCart />}
        />
        <NavButton
          title="چت"
          customFunc={() => handleClick("chat")}
          color={currentColor}
          dotColor="#03C9D7"
          icon={<BsChatLeft />}
        />
        <NavButton
          title="اطلاع رسانی"
          customFunc={() => handleClick("notification")}
          color={currentColor}
          dotColor="#03C9D7"
          icon={<RiNotification3Line />}
        />

        <div
          className="flex items-center gap-2 cursor-pointer p-1 hover:bg-gray-100 rounded-lg "
          onClick={() => handleClick("userProfile")}
        >
          <img src={avatar} alt="" className="rounded-full w-8 h-8" />
          <p>
            <span className="text-gray-400 text-14">سلام، </span>
            <span className="text-gray-400 font-bold ml-1 text-14">پازل</span>
          </p>
          <MdKeyboardArrowDown className="text-gray-400 text-14" />
        </div>

        {isClicked.cart && <Cartm />}
        {isClicked.chat && <Chat />}
        {isClicked.notification && <Notification />}
        {isClicked.userProfile && <UserProfile />}
      </div>
    </div>
  );
};

export default Navbar;
