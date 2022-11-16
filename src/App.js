import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Style from "./Style.css";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import Main from "./components/Main";
import Product from "./components/Product";
import FilterData from "./components/FilterData";
import Header from "./components/Header";
import Cart from "./components/Cart";
import { Redirect, Route, Switch } from "react-router-dom";

const PrivateRoute = (props) => {
  const token = localStorage.getItem("loggedin");
  if (token) {
    return <Route exact={true} path={props.path} component={props.component} />;
  } else {
    return <SignIn {...props} />;
  }
};

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={SignIn} />
        <Route exact path="/signup" component={SignUp} />
        <PrivateRoute exact path="/main" component={Main} />
        <PrivateRoute exact path="/product" component={Product} />
        <PrivateRoute exact path="/filterdata" component={FilterData} />
        <PrivateRoute exact path="/header" component={Header} />
        <PrivateRoute exact path="/cart" component={Cart} />
        <Redirect to="/" />
      </Switch>
    </>
  );
};
export default App;
