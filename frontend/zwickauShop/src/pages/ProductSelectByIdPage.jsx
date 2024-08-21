import React from "react";
import ProductSelectById from "../components/ProductSelectById";

const ProductSelectByIdPage = () => {
  return (
    <div className="m-12 h-full">
      <div className="flex flex-col justify-center items-center">
        <div className="flex  items-center  justify-center w-full   ">
          <div
            className={`bg-white dark:bg-cyan-700 flex h-full justify-center items-center   z-10  w-full   rounded-2xl`}
          >
            <div className="h-[100%] w-full flex-col flex items-center justify-center   p-4 relative">
              <div className="absolute w-2/3 h-2/3 bg-black  inset-0  rounded-xl border-4 border-black border-opacity-0 shadow-inner shadow-white backdrop-blur-xl  z-10"></div>
              <ProductSelectById />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSelectByIdPage;
