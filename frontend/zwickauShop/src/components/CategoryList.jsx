import { useParams } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";

import { useGetProductsByCategoryIdQuery } from "../features/productApiSlice";
import { selectCategoryById } from "../features/categoryApiSlice ";
import { useSelector } from "react-redux";
import CartComponent from "./CartComponent";
import { useStateContext } from "../contexts/ContextProvider";
import React from "react";

const CategoryList = () => {
  const { categoryId } = useParams();
  const category = useSelector((state) =>
    selectCategoryById(state, categoryId)
  );

  const {
    data: productsForCategory,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetProductsByCategoryIdQuery(categoryId);
  let content;
  const { activeMenu } = useStateContext();

  if (isSuccess) {
    const { ids, entities } = productsForCategory;

    content = ids.map((id) => <CartComponent key={id} productId={id} />);
  }
  return (
    <div className="mt-12">
      <div className="flex flex-col justify-center items-center">
        <div className="flex m-3 flex-wrap justify-center gap-2 items-center">
          <div
            className={`bg-white dark:bg-secondary-dark-bg  pt-10 px-4   w-full   rounded-2xl grid md:gap-10  gap-2 grid-cols-2 ${
              activeMenu ? " lg:grid-cols-2 xl:grid-cols-3" : "lg:grid-cols-3"
            }`}
          >
            {content}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryList;
