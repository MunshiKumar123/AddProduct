import React from "react";
import FilterData from "./FilterData";
import { useHistory } from "react-router-dom";
import Product from "./Product";
import Header from "./Header";

const Main = (props) => {
  const history = useHistory();
  const logOut = () => {
    localStorage.removeItem("loggedin");
    history.push("/");
  };

  const userName = JSON.parse(localStorage.getItem("user"));

  return (
    <>
      <div className="container p-3 my-3 border">
        <Header />
        <button className="btn btn-primary float-end mt-2" onClick={logOut}>
          LogOut
        </button>
        <FilterData />
        <p className="text-center mt-5">Your User Name: {userName.name}</p>
        <Product />
      </div>
    </>
  );
};

export default Main;
