import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import cartImg from "./cart.png";

const Header = (props) => {
  const { carts } = useSelector((state) => state.products);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        {/* <a className="navbar-brand mx-3" href="#">
          CodeWithViju's Shop
        </a> */}
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto"></ul>
          <div className="div-inline  my-2 my-lg-0">
            Shoping Cart
            <Link to={"/cart"}>
              <button className="btn my-2 my-sm-0  mx-3" type="submit">
                <img src={cartImg} alt="cart-img" height="50" width="50" />
                {carts.length}
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Header;
