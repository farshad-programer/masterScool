import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectProductById } from "../features/productApiSlice";
import { Link } from "react-router-dom";
import React from "react";

const ProductCart = ({ productId }) => {
  const product = useSelector((state) => selectProductById(state, productId));
  const navigate = useNavigate();
  const handleEdit = () => navigate(`/${productId}`);

  let renderedProducts = (
    <div>
      <div>{product?.price}</div>
      <Link to={`/${product.id}`}>View Post</Link>
    </div>
  );
  return <ul>{renderedProducts}</ul>;
};

export default ProductCart;
