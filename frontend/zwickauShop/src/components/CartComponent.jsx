import image from "../data/product1.jpg";

import starHalfFill from "../data/star-half-fill.svg";
import starNoFill from "../data/star-no-fill.svg";
import star from "../data/star.svg";
import { PiHeartStraightFill, PiHeartStraightBold } from "react-icons/pi";
import { BsFillEyeFill, BsEyeSlashFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import { selectProductById } from "../features/productApiSlice";
import { useNavigate } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";
import React from "react";

const CartComponent = ({ productId }) => {
  

  const { addToCart, removeFromCart, cartItems } = useStateContext();
  const product = useSelector((state) => selectProductById(state, productId));
  const navigate = useNavigate();
  const handleEdit = () => navigate(`/${productId}`);
  const isInCart = cartItems?.some((item) => item.id === product.id);

  return (
    <div
      className="h-full cornerpopup before:font-eng1 before:content-[attr(after)]"
      after={`${product?.rating}%`}
    >
      <div className="bg-white  text-gray-700 md:72 xs:w-[170px]  shadow-md shadow-white rounded-md m-2 font-roboto ">
        {console.log(product)}
        <img src={product.images[0]} alt="" className="w-full h-[7rem] object-cover" />
        <div className="md:p-5 p-2 flex flex-col gap-1">
          <div className="flex items-center gap-x-4">
            <span className="pl-1 pr-2 py-1.5 rounded-full text-xs -ml-1 font-eng3 font-medium text-gray-900 text-left bg-gray-200">
              official store
            </span>
          </div>
          <h2
            className="font-semibold text-sm overflow-ellipsis overflow-hidden whitespace-nowrap"
            title="Best Headphone"
          >
            {product?.name[0].value}
          </h2>
          <div className="ml-1">
            <span className="text-sm font-bold   ">{product?.price} $ </span>
            <div className="flex items-center gap-x-5 mt-l    ">
              <span className="text-sm line-through opacity-50">
                {product?.price + product?.price * (product?.rating / 100)}
              </span>
              <span className="bg-green-400 px-2 py-0.5 rounded-md  text-white text-xs">
                {product?.rating} %
              </span>
            </div>
          </div>

          <div className="flex ">
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={starHalfFill} alt="" />
            <img src={starNoFill} alt="" />
          </div>
          <span className=" text-sm ml-1 font-eng2 font-semibold text-gray-500">
            20K Review
          </span>

          <div className={`${isInCart ? "" : " flex gap-1"}`}>
            {!isInCart ? (
              <button
                onClick={() => addToCart(product.id)}
                className="hover:bg-yellow-500/90 text-xs  bg-yellow-500/70 md:px-6 py-2 px-2 active:shadow-lg active:shadow-yellow-600  font-eng2 rounded-md text-white font-medium tracking-wider transition"
              >
                Add to cart
              </button>
            ) : (
              <div className="flex items-center justify-between">
                <div className="flex items-center justify-between">
                  <button
                    onClick={() => addToCart(product.id)}
                    className="rounded-md px-2 py-1 bg-yellow-500/70"
                  >
                    <FaPlus className="text-white  text-md" />
                  </button>
                  <span className="bg-gray-300/60 mx-2 px-3  rounded-md">
                    {
                      cartItems?.filter((row) => row.id === product.id)[0]
                        ?.count
                    }
                  </span>
                  <button
                    onClick={() => removeFromCart(product.id)}
                    className="rounded-md px-2 py-1 bg-yellow-500/70"
                  >
                    <FaMinus className="text-white  text-md" />
                  </button>
                </div>
              </div>
            )}
          </div>
          <div className="flex items-center justify-between mt-1 space-x-7">
            <button onClick={()=>navigate(`/product/${product.id}`)} className="flex-grow flex py-2 justify-center items-center bg-gray-300/60 hover:bg-gray-300/80 transition rounded-md">
              <BsEyeSlashFill className=" text-xl text-black   border-black opacity-50" />
            </button>
            <button className="flex-grow flex h-full justify-center py-2 items-center bg-gray-300/60 hover:bg-gray-300/80 transition rounded-md">
              <PiHeartStraightFill className=" text-xl text-black   border-black opacity-50" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartComponent;
