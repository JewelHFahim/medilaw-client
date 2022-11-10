import React, { useContext  } from "react";
import { FaUserAlt, FaStar  } from "react-icons/fa";
import { UserContext } from "../../Context/AuthContex";
import './SingleReview.css'


const SingleReview = ({review}) => {

  const {user} = useContext(UserContext)

    const {name, photoURL, email, comment} = review;
  return (
    <div className=" flex photoURL w-9/12 mx-auto border border-slate-300 shadow-lg rounded-lg m-2 p-4  items-center">
    
    <div>
    {
      photoURL ?
      <img  src={photoURL} alt="" />
      :
      <p className="mr-4 text-5xl"><FaUserAlt/></p>
    }
    <div>
      <p><span className="font-semibold">{name}</span> </p>
      <p className="text-sm">{email}</p>
    </div>
    </div>

    

    <div className="flex items-center ml-2">
    <div className="divider divider-horizontal"></div>
      <p className="my-2"><span className="text-info">review: </span> {comment}</p>
    </div>

    </div>
  );
};

export default SingleReview;
