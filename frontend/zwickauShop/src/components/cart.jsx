import React, { useEffect } from "react";
import { MdOutlineCancel } from "react-icons/md";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

import { useStateContext } from "../contexts/ContextProvider";
import Button from "./Button";
import useClickOutside from "../utilities/useClickOutside";
import { useRef } from "react";
import { useGetProductsQuery } from "../features/productApiSlice";

import CartBasketComponent from "./CartBasketComponent";
import useAuth from "./Hooks/useAuth";

const Cartm = () => {
  const { isAdmin, status, email, roles } = useAuth();

  const cartRef = useRef(null);
  useClickOutside(cartRef, () => {
    handleClick("cart");
  });
  const {
    currentColor,
    handleClick,
    cartItems,
    totalPriceShop,
    setTotalPriceShop,
  } = useStateContext();

  const { isSuccess, data: products } = useGetProductsQuery();

  let content;
  let totalPrice;
  useEffect(() => {
    console.log("objectlllllll", isAdmin, status, email, roles);
    let totalPrice = 0;
    for (let i = 0; i < cartItems.length; i++) {
      const totalPriceProduct =
        products.entities[cartItems[i].id].price * cartItems[i].count;
      totalPrice += totalPriceProduct;
    }
    setTotalPriceShop(totalPrice);
  }, [cartItems, isSuccess]);
  if (isSuccess) {
    const cartItemsIds = cartItems.map((item) => item.id);

    content = cartItemsIds.map((productId) => (
      <CartBasketComponent key={productId} productId={productId} />
    ));
  }

  // <CartComponent key={productId} productId={productId} />
  return (
    <div className="bg-half-transparent w-full fixed z-20 top-0 right-0 ">
      <div
        ref={cartRef}
        className="float-right h-screen  duration-1000 ease-in-out dark:text-gray-200 transition-all dark:bg-[#33373E] bg-white md:w-400 p-8"
      >
        <div className="flex justify-between items-center">
          <p className="font-semibold text-lg">سبد خرید</p>
          <Button
            text={<MdOutlineCancel />}
            color="rgb(153, 171, 180)"
            bgHoverColor="light-gray"
            size="2xl"
            borderRadius="50%"
            onClick={() => handleClick("cart")}
          />
        </div>
        {content}
        <div className="mt-3 mb-3">
          <div className="flex justify-between items-center">
            <p className="text-gray-500 dark:text-gray-200">
              جمع بدون هزینه حمل
            </p>
            <p className="font-semibold">{`${totalPriceShop} $`}</p>
          </div>
          <div className="flex justify-between items-center mt-3">
            <p className="text-gray-500 dark:text-gray-200">جمع کل</p>
            <p className="font-semibold">$900</p>
          </div>
        </div>
        <div className="mt-5">
          <Button
            color="white"
            bgColor={currentColor}
            text="نهایی کردن سفارش"
            borderRadius="10px"
            width="full"
          />
        </div>
      </div>
    </div>
  );
};

export default Cartm;
