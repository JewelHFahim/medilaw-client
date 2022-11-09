import React, { useContext } from "react";
import login from "../../../Assests/login.png";
import googleLogo from "../../../Assests/social/google.png";
import facebookLogo from "../../../Assests/social/facebook.png";
import linkedInLogo from "../../../Assests/social/linkedin.png";
import "./SignUp.css";
import { UserContext } from "../../../Context/AuthContex";
import { Link } from "react-router-dom";
import { GoogleAuthProvider } from "firebase/auth";

const SignUp = () => {

  const { createUser, googleLogin} = useContext(UserContext);
  const googleProvider = new GoogleAuthProvider();

    const handleSignin = (event) =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log({name, photoURL, email, password});

        const user = {
          name,
          photoURL,
          email
        }

        createUser(email, password)
        .then(result =>{
          const user = result.user;
          console.log(user);
        })
        .catch(error => console.error(error))


        fetch("http://localhost:5000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(user),
        })
          .then((res) => res.json())
          .then((data) => console.log(data))
    }

    const handleGoogle = () =>{
      googleLogin(googleProvider)
      .then(result =>{
        const user = result.user;
        console.log(user);
      })
      .catch(error => console.error(error))
    }

  return (
    <div>
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left w-1/3">
            <p className="text-3xl text-center">Sign Up</p>
            <img src={login} alt="" />
          </div>
          <div className="card flex-shrink-0 max-w-sm shadow-2xl bg-base-100 w-2/3">

            <form onSubmit={handleSignin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="name"
                  className="input input-bordered"
                />
              </div>
              
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  name="photoURL"
                  type="photoURL"
                  placeholder="Your Profile Pic URL"
                  className="input input-bordered"
                />
              </div>
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
                    Already have an account? <Link to="/login" className="text-teal-600 font-bold" >Login</Link>
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-info">Sign Up</button>
              </div>
              <div className="divider">OR</div>
              <div className="social text-center">
                <button onClick={handleGoogle} className="mr-2 p-2 bg-slate-300 rounded-full">
                  <img src={googleLogo} alt="" />
                </button>
                <button className="mr-2 p-2 bg-slate-300 rounded-full">
                  <img src={facebookLogo} alt="" />
                </button>
                <button className="mr-2 p-2 bg-slate-300 rounded-full">
                  <img src={linkedInLogo} alt="" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
