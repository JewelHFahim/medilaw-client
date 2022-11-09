import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from '../../../Assests/logo.png';
import { UserContext } from "../../../Context/AuthContex";
import './Header.css';
import { FaSignOutAlt } from 'react-icons/fa';




const Header = () => {

  const {user, logOut} = useContext(UserContext);



  const menuItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/services">Services</Link>
      </li>
      <li>
        <Link to="/blog">Blog</Link>
      </li>

      {
        user?.email && <li>
        <Link to="/personalreview">My Reviews</Link>
      </li> 
      }

    </>
  );

  const handleLogOut = () =>{
    logOut()
    .then(()=>{})
    .catch(error =>{console.error(error)})
  }

  return (
    <div className="navbar bg-slate-900 ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost text-slate-200 lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-slate-800 rounded-box w-52 text-white"
          >
            {menuItems}
          </ul>
        </div>
        <Link className="logo"> <img src={logo} alt="" /></Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0 text-white">{menuItems}</ul>
      </div>
      <div className="navbar-end">
      {
        user?.uid ?
        <button onClick={handleLogOut}  className="btn btn-outline btn-info mr-5 tooltip tooltip-bottom" data-tip="Logout"> <FaSignOutAlt/></button>
        :
        <Link to="/login"><button className="btn btn-outline btn-info btn-sm text-white font-semibold mr-5" >Login</button></Link>
      }
      </div>
    </div>
  );
};

export default Header;
