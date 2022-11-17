import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RemoveCartItem } from "../Redux/reducers/ProductSlice";

const Cart = (props) => {
  const dispatch = useDispatch();
  const { carts } = useSelector((state) => state.products);

  const totalPrice = carts.reduce((acc, a) => {
    return acc + a.price;
  }, 0);

  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <h1>Shoping Cart</h1>
          <div className="col-md-12">
            <h5 className="text-right text-success">{carts.length} items</h5>

            <table class="table table-hover">
              <tbody>
                {carts && Object.keys(carts).length > 0 ? (
                  carts.map((item, i) => {
                    return (
                      <>
                        <tr key={i}>
                          <td>
                            <img
                              src={item.image}
                              alt="T-Shirt"
                              width="100"
                              height="100"
                            />
                          </td>
                          <td className="align-middle">{item.title}</td>
                          <td className="align-middle">
                            {item.price} &#x20B9;
                          </td>
                          <td className="align-middle ">
                            <button
                              onClick={() => dispatch(RemoveCartItem(item.id))}
                              className="btn btn-primary"
                            >
                              Remove Cart
                            </button>
                          </td>
                        </tr>
                      </>
                    );
                  })
                ) : (
                  <h2 className="text-center">Cart is Empty! Shop Now</h2>
                )}
              </tbody>
            </table>
            <NavLink to="/main"> Back to Products</NavLink>
            <h4 className="text-right text-success">
              Total Price : {totalPrice}
            </h4>
          </div>
        </div>
      </div>
    </>
  );
};
export default Cart;
