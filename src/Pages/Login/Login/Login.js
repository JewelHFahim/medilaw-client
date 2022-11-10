import React, { useContext } from "react";
import login from "../../../Assests/login.png";
import googleLogo from "../../../Assests/social/google.png";
import facebookLogo from "../../../Assests/social/facebook.png";
import linkedInLogo from "../../../Assests/social/linkedin.png";
import "./Login.css";
import { UserContext } from "../../../Context/AuthContex";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { GoogleAuthProvider } from "firebase/auth";
import toast, { Toaster } from "react-hot-toast";

const notify = () => toast.success("Login Successfull");

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const { logIn, googleLogin } = useContext(UserContext);
  const googleProvider = new GoogleAuthProvider();

  const handleSignin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log({ email, password });

    logIn(email, password)
      .then((result) => {
        const user = result.user;
        fetch("https://medilaw-server.vercel.app/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({ email: user?.email }),
        })
          .then((res) => res.json())
          .then((data) => {
            localStorage.setItem("mediLawToken", data.token);
          });

        console.log(user);
        <div className="toast toast-top toast-center">
          <div className="alert alert-info">
            <span>Log in Successfull.</span>
          </div>
        </div>;
        form.reset();
        navigate(from, { replcae: true });
      })
      .catch((error) => console.log(error));
  };
  const handleGoogle = () => {
    googleLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replcae: true });
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left w-1/3">
            <p className="text-3xl text-center">Login</p>
            <img src={login} alt="" />
          </div>
          <div className="card flex-shrink-0 max-w-sm shadow-2xl bg-base-100 w-2/3">
            <form onSubmit={handleSignin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  name="password"
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="!#" className="label-text-alt link link-hover">
                    New in MediLaw?
                    <Link to="/signup" className="text-teal-600 font-bold">
                      Sign Up
                    </Link>
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button onClick={notify} type="submit" className="btn btn-info">
                  Login
                </button>
                <Toaster />
              </div>
            </form>
            <div className="divider">OR</div>
            <div className="social text-center pb-4">
              <button
                onClick={handleGoogle}
                className="mr-2 p-2 bg-slate-300 rounded-full"
              >
                <img src={googleLogo} alt="" />
              </button>
              <button className="mr-2 p-2 bg-slate-300 rounded-full">
                <img src={facebookLogo} alt="" />
              </button>
              <button className="mr-2 p-2 bg-slate-300 rounded-full">
                <img src={linkedInLogo} alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
