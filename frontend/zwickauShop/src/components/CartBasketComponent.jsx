import { useSelector } from "react-redux";
import { selectProductById } from "../features/productApiSlice";
import { useStateContext } from "../contexts/ContextProvider";
import image from "../data/product1.jpg";
import { BsFillTrash3Fill } from "react-icons/bs";

import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import React, { useEffect, useState } from "react";
const CartBasketComponent = ({ productId }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const { addToCart, removeFromCart, cartItems, removeAllFromCart } =
    useStateContext();
  const product = useSelector((state) => selectProductById(state, productId));
  useEffect(() => {
    const matchingCartItems = cartItems.filter(
      (cartItem) => cartItem?.id === productId
    );
    setTotalPrice(matchingCartItems[0]?.count * product?.price);
  }, [cartItems]);

  return (
    <div>
      <div className="flex items-center   leading-8 gap-5 border-b-1 border-color dark:border-gray-600 p-4">
        <img className="rounded-lg h-80 w-24" src={image} alt="" />
        <div>
          <div className="flex items-center justify-between">
            <p className="font-semibold ">{product?.name[0].value}</p>
            <p className="text-gray-600 pr-6 dark:text-gray-400 text-sm font-semibold">
              {`${product?.price} $`}
            </p>
            <br />
          </div>
          <div className="flex gap-4 mt-2 items-center">
            <p className="font-semibold text-lg">{`${totalPrice} $`}</p>
            <div className="flex items-center border-1 border-r-0 border-color rounded">
              <button className="p-2 border-r-1 dark:border-gray-600 border-color text-red-600 ">
                <AiOutlineMinus onClick={() => removeFromCart(product?.id)} />
              </button>
              <p className="p-2 border-r-1 border-color dark:border-gray-600 text-green-600">
                {cartItems?.filter((row) => row.id === product.id)[0]?.count}
              </p>
              <button
                onClick={() => addToCart(product.id)}
                className="p-2 border-r-1 border-color dark:border-gray-600 text-green-600"
              >
                <AiOutlinePlus />
              </button>
              <button
                onClick={() => removeAllFromCart(product?.id)}
                className="p-2 border-r-1 border-color dark:border-gray-600 text-yellow-600"
              >
                <BsFillTrash3Fill />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartBasketComponent;
