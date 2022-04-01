import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getProducts } from "../../redux/actions/productActions";
import Product from "../Product/Product";

const Products = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector(
    (state) => state.productList
  );
  const { userInfo } = useSelector((state) => state.userLogin);

  useEffect(() => {
    if (!userInfo) {
      navigate("/login");
    }
    dispatch(getProducts());
  }, [dispatch, navigate, userInfo]);

  return (
    <>
      <div className="container">
        <div className="row d-flex justify-content-center mt-3">
          <div className="col-lg-8 my-2">
            <h3 className="font-weight-bold"> Products </h3>
            <Product loading={loading} error={error} products={products} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
