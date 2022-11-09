import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../Context/AuthContex";
import { FaUserAlt } from "react-icons/fa";

const PersonalReview = () => {

const {user} = useContext(UserContext);

  const [revis, setRevi] = useState([]);
  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:5000/personalreview?email=${user?.email}`)
        .then((res) => res.json())
        .then((data) => setRevi(data))
        .catch((error) => console.error(error));
    }
  }, [user?.email]);
  

  return (
    <div>
      {revis.map(rv=> <div className=" photoURL w-9/12 mx-auto border border-slate-300 shadow-lg rounded-lg m-2 p-4 flex items-center" key ={rv._id}>
           {
            user?.photoURL ? 
            <img src={user?.photoURL} alt="" />
           : 
            <p className="mr-4 text-5xl"><FaUserAlt /></p>
          } 

          <div className="flex items-center">
            <div>
              <p><span className="font-semibold">{user?.displayName}</span></p>
              <p>{rv.email}</p>
            </div>
            <div className="divider divider-horizontal"></div>
            <p className="my-2">Comment: {rv.comment}</p>
          </div>
        </div>  )}
    </div>
  );
};

export default PersonalReview;


