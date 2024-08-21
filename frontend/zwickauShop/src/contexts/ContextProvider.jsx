import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsCliked] = useState(initialState);
  const [currentColor, setCurrentColor] = useState("#03C9D7");
  const [currentMode, setCurrentMode] = useState("Dark");
  const [themeSettings, setThemeSettings] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalPriceShop, setTotalPriceShop] = useState(0);

  const addToCart = (itemId) => {
    if (!cartItems?.find((item) => item.id === itemId))
      setCartItems([...cartItems, { id: itemId, count: 1 }]);
    else
      setCartItems(
        cartItems.map((item) => {
          if (item.id === itemId) return { ...item, count: item.count + 1 };
          else return item;
        })
      );
    console.log(cartItems);
  };
  const removeAllFromCart = (itemId) => {
    setCartItems(
      cartItems.filter((item) => {
        return item.id !== itemId;
      })
    );
  };

  const removeFromCart = (itemId) => {
    setCartItems(
      cartItems.map((i) => {
        if (i.id === itemId)
          return { ...i, count: i.count === 0 ? 0 : i.count - 1 };
        else return i;
      })
    );
  };
  const handleClick = (clicked) => {
    setIsCliked({ ...initialState, [clicked]: !isClicked[clicked] });
  };

  const setMode = (e) => {
    setCurrentMode(e.target.value);
    localStorage.setItem("themeMode", e.target.value);
    setThemeSettings(false);
  };

  const setColor = (color) => {
    setCurrentColor(color);
    localStorage.setItem("colorMode", color);
    setThemeSettings(false);
  };

  const [screenSize, setScreenSize] = useState(undefined);

  return (
    <StateContext.Provider
      value={{
        activeMenu,
        setActiveMenu,
        isClicked,
        setIsCliked,
        handleClick,
        screenSize,
        setScreenSize,
        currentColor,
        currentMode,
        setColor,
        setMode,
        themeSettings,
        setThemeSettings,
        addToCart,
        removeFromCart,
        setCartItems,
        cartItems,
        removeAllFromCart,
        totalPriceShop,
        setTotalPriceShop,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
