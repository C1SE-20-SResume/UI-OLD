import React from "react";
import { Link } from "react-router-dom";
import Footer from "../container/Footer";

import { useCookies } from "react-cookie";
function Login() {
  const [cookies, setCookie] = useCookies(["user"]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    if (email === "" || password === "") {
      alert("Please fill all the fields");
    } else {
      fetch(`${process.env.REACT_APP_API_URL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.status) {
            setCookie("user", data.api_token);
            alert("login successful");
          } else {
            alert(data.message);
          }
        })

        .catch((err) => {
          console.log(err);
        });
    }
  };
  return (
    <>
      <div className="main">
        <div className="col1">
          <div className="col1-content">
            <div>
              <h4>JOIN OUR TEAM</h4>
            </div>
            <div>
              <h1>
                Creating an accout is <br></br>
                extremely easy
              </h1>
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                venenatis tristique ornare.<br></br> Nullam semper lectus at
                maximus vehicula. Aliquam interdum mollis imperdiet.<br></br>{" "}
                Aenean id purus lacus. Integer mattis metus justo, sit amet
                suscipit sapien ornare id.{" "}
              </p>
            </div>
            <div>
              <button>Tutorial</button>
            </div>
          </div>
        </div>
        <div className="col2">
          <form className="formLogin" onSubmit={handleSubmit}>
            <div className="title-login">Login</div>
            <div>
              <label>Username :</label>
              <input type="text" placeholder="Email" id="email" />
            </div>
            <div>
              <label>Password :</label>
              <input type="password" id="password" placeholder="1-9 A-Z" />
            </div>
            <div className="div_forgotpassword">
              <Link className="forgotpassword">Forgot password? </Link>
            </div>

            <div className="btn-login">
              <button type="submit">Login</button>
            </div>

            <div className="not-account">
              <span>Need an account ?</span>
              <Link className="register" to="/register">
                Register
              </Link>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Login;
