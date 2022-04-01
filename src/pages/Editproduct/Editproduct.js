import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/Loader";
import Message from "../../components/Message";
import { editProduct, updateProduct } from "../../redux/actions/productActions";
import { toastMessage } from "../../utils";
import { useNavigate, useParams } from "react-router-dom";
import {
  PRODUCT_EDIT_RESET,
  PRODUCT_UPDATE_RESET,
} from "../../redux/constants/productConstants";

const Editproduct = () => {
  const navigate = useNavigate();
  const { slug } = useParams();
  const dispatch = useDispatch();
  const { loading, error, product } = useSelector((state) => state.productEdit);
  const {
    loading: loadingUpdate,
    success: successUpdate,
    error: errorUpdate,
  } = useSelector((state) => state.productUpdate);

  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState("");
  const [category_id, setCategoryId] = useState(0);
  const [status, setStatus] = useState("");

  const handleUpdateProduct = (e) => {
    e.preventDefault();
    dispatch(
      updateProduct(slug, { name, price, category, category_id, status })
    );
  };

  React.useEffect(() => {
    if (!product?.name) {
      dispatch(editProduct(slug));
    } else {
      setName(product.name);
      setPrice(product.price);
    }
    if (successUpdate) {
      toastMessage("success", "Product has been edited successfully");
      setName("");
      setPrice(0);
      navigate("/products");
    }
    return () => {
      dispatch({ type: PRODUCT_UPDATE_RESET });
    };
  }, [slug, dispatch, product?.name, product?.price, successUpdate, navigate]);

  return (
    <>
      {loading && <Loader fullPage={true} />}
      <div className="container">
        <div className="row d-flex justify-content-center mt-5">
          <div className="col-lg-6 my-2">
            {error && <Message type="danger" message={error} />}
            {errorUpdate && <Message type="danger" message={errorUpdate} />}

            <h4 className="text-primary font-weight-bold">Edit Product</h4>
            <div className="shadow p-3">
              <form onSubmit={handleUpdateProduct}>
                <div className="form-row my-2">
                  <div className="form-group col-md-6 col-6">
                    <label htmlFor="inputtext4">Product Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputtextl4"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="form-group col-md-6 col-6">
                    <label htmlFor="inputPassword4">Price</label>
                    <input
                      type="number"
                      className="form-control"
                      id="inputPassword4"
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                    />
                  </div>
                </div>
                <div className="form-row my-2">
                  <div className="form-group col-md-4 col-6">
                    <label htmlFor="inputState">Category</label>
                    <select
                      id="inputState"
                      className="form-control"
                      onChange={(e) => setCategory(e.target.value)}
                    >
                      <option>Choose...</option>
                      <option value="Electronics">Electronics</option>
                      <option value="Sports">Sports</option>
                      <option value="Fashion">Fashion</option>
                      <option value="Furniture">Furniture</option>
                      <option value="Stationaries">Stationaries</option>
                    </select>
                  </div>
                  <div className="form-group col-md-4 col-3">
                    <label htmlFor="category_id">Category Id</label>
                    <select
                      id="category_id"
                      className="form-control"
                      onChange={(e) => setCategoryId(e.target.value)}
                    >
                      <option>Choose...</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select>
                  </div>
                  <div className="form-group col-md-4 col-3">
                    <label htmlFor="inputStatus">Status</label>
                    <select
                      id="inputStatus"
                      className="form-control"
                      onChange={(e) => setStatus(e.target.value)}
                    >
                      <option>Choose...</option>
                      <option value="Avalaible">Avalaible</option>
                      <option value="Not Avalaible">Not Avalaible</option>
                    </select>
                  </div>
                </div>

                {loadingUpdate && <Loader smallPage={true} />}

                <button type="submit" className="btn btn-primary my-2">
                  Edit Product
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Editproduct;
