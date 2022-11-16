import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";
import img1 from "../components/login-img.jpg";

const SignIn = (props) => {
  const history = useHistory();

  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const [errorVbl, setErrorVbl] = useState(false);

  const handleLogin = (evt) => {
    setInput({ ...input, [evt.target.name]: evt.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input);
    const loggeduser = JSON.parse(localStorage.getItem("user"));

    if (
      input.email === loggeduser.email &&
      input.password === loggeduser.password
    ) {
      localStorage.setItem("loggedin", true);
      history.push("/main");
    } else {
      setErrorVbl(true);
    }
  };

  return (
    <>
      <div className="container mt-5 text-success">
        <div className="row">
          <div className="col-md-8">
            <img src={img1} className="img-fluid" alt="login" />
          </div>
          <div className="col-md-4 mt-5">
            {" "}
            <h2>SignIn</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Email address</label>
                <input
                  name="email"
                  value={input.email}
                  type="email"
                  className="form-control"
                  aria-describedby="emailHelp"
                  onChange={handleLogin}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  name="password"
                  value={input.password}
                  className="form-control"
                  onChange={handleLogin}
                  required
                />
              </div>
              {errorVbl && (
                <p className="text-danger">
                  your user id and password don't match
                </p>
              )}

              <button type="submit" className="btn btn-primary">
                SignIn
              </button>
            </form>
            <NavLink to="/signup">SignUp</NavLink>
            <br />
            <span>
              <NavLink to="/signup">Reset password</NavLink>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
