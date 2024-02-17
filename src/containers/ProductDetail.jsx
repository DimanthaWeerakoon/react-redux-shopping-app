import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { selectedProduct } from "../redux/actions/productActions";
import { useDispatch, useSelector } from "react-redux";

const ProductDetail = () => {
  const product = useSelector((state) => state.product);
  const { productId } = useParams();
  const dispatch = useDispatch();
  console.log("Product :", product);

  const fetchProductDetail = async (id) => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(selectedProduct(response.data));
  };
  useEffect(() => {
    if (productId && productId !== "") fetchProductDetail(productId);
  }, [productId]);
  return (
    <div>
      <h1>Product Detail</h1>
    </div>
  );
};

export default ProductDetail;
