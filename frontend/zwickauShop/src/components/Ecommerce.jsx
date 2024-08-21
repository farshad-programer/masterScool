import { useSelector } from "react-redux";

import { Link, useParams } from "react-router-dom";
import {
  selectProductById,
  selectProductIds,
  useGetProductsQuery,
} from "../features/productApiSlice";

import CartComponent from "./CartComponent";
import { useStateContext } from "../contexts/ContextProvider";

const Ecommerce = () => {
  const { activeMenu } = useStateContext();

  const {
    data: products,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetProductsQuery();

  let content;
  if (isSuccess) {
    const { ids } = products;
    console.log("products", products);
    content = ids.map((productId) => (
      <CartComponent key={productId} productId={productId} />
    ));
  }

  return (
    <div className="mt-12 ">
      <div className="flex flex-col justify-center items-center">
        <div className="flex m-10 flex-wrap justify-center  items-center">
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

export default Ecommerce;
