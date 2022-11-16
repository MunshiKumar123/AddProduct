import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";
import img1 from "../components/login-img.jpg";

const SignUp = (props) => {
  const history = useHistory();

  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleInput = (evt) => {
    setInput({ ...input, [evt.target.name]: evt.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input);
    localStorage.setItem("user", JSON.stringify(input));
    history.push("/");
  };

  return (
    <>
      <div className="container mt-5 text-success">
        <div className="row">
          <div className="col-md-8">
            <img src={img1} className="img-fluid" alt="login" />
          </div>
          <div className="col-md-4">
            <h2>Create Account</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={input.name}
                  className="form-control"
                  // aria-describedby="emailHelp"
                  onChange={handleInput}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Email address</label>
                <input
                  type="email"
                  name="email"
                  value={input.email}
                  className="form-control"
                  onChange={handleInput}
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
                  onChange={handleInput}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary">
                SignUp
              </button>
            </form>
            <NavLink to="/">SignIn</NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
