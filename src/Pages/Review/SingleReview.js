import React, { useContext  } from "react";
import { FaUserAlt, FaStar  } from "react-icons/fa";
import { UserContext } from "../../Context/AuthContex";
import './SingleReview.css'


const SingleReview = ({review}) => {

  const {user} = useContext(UserContext)

    const {email, comment} = review;
  return (
    <div className=" photoURL w-9/12 mx-auto border border-slate-300 shadow-lg rounded-lg m-2 p-4 flex items-center">
    
    {
      user?.photoURL ?
      <img  src={user?.photoURL} alt="" />
      :
      <p className="mr-4 text-5xl"><FaUserAlt/></p>
    }
    <div className="flex items-center">
    <div>
      <p><span className="font-semibold">{}</span> </p>
      <p>{email}</p>
    </div>
    <div className="divider divider-horizontal"></div>
      <p className="my-2">Comment: {comment}</p>
    </div>

    </div>
  );
};

export default SingleReview;
