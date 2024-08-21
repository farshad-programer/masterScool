import { useSelector } from "react-redux";
import { selectProductById } from "../features/productApiSlice";
import { useParams } from "react-router-dom";
import React from "react";

const ProductSingel = () => {
  const { postId } = useParams();

  const post = useSelector((state) => selectProductById(state, Number(postId)));
  return (
    <div className="mt-12">
      <div className="flex flex-col justify-center items-center">
        <div className="flex m-3 flex-wrap justify-center gap-2 items-center">
          <div className="bg-white dark:bg-secondary-dark-bg min-w-[180px] md:w-56   w-full xs:max-w-[220px] rounded-2xl flex flex-col items-center justify-center">
            اثنبنتب
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSingel;
