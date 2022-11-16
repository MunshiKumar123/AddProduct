import React from "react";
import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { AddToCart, fetchAllProducts } from "../Redux/reducers/ProductSlice";

const Product = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, []);
  const { products, loading } = useSelector((state) => state.products);

  return (
    <>
      <div className="container">
        <div className="row">
          <h2>My Product!</h2>

          {loading && <h4 className="succsed">loadin...</h4>}
          {products?.map((row, i) => {
            return (
              <>
                <div className="col-md-3" key={i}>
                  <div className="card card-width shadow p-3 mb-5 bg-body rounded">
                    <img
                      src={row.image}
                      className="rounded mx-auto d-block p-2"
                      alt={row.image}
                      width="100"
                      height="150"
                    />
                    <div className="card-body mx-auto">
                      {/* <h5 className="card-title">{row.title}</h5> */}
                      <p className="card-text text-center">
                        {row.price} &#x20B9;
                      </p>
                      <button
                        onClick={() => dispatch(AddToCart(row.id))}
                        className="btn btn-info"
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default Product;
