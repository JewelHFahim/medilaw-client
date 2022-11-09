import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../Context/AuthContex";
import { FaUserAlt, FaTrashAlt, FaEdit, FaEnvelope } from "react-icons/fa";
import toast, { Toaster } from 'react-hot-toast';



const notify = () => toast('Here is your toast.');


const PersonalReview = () => {
  const { user } = useContext(UserContext);

  const [revis, setRevi] = useState([]);
  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:5000/personalreview?email=${user?.email}`)
        .then((res) => res.json())
        .then((data) => setRevi(data))
        .catch((error) => console.error(error));
    }
  }, [user?.email]);

  const [currentReview, setCurrentReview] = useState([]);
  const handleDelete = (id) => {
    const agreed = window.confirm("Are you sure want to Delete?");
    if (agreed) {
      fetch(`http://localhost:5000/personalreview/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Deleted Successfully");
            const remainingReviews = revis.filter((rmo) => rmo._id !== id);
            setCurrentReview(remainingReviews);
          }
        });
    }
  };


  // const [visitors, setVisitors] = useState([]);
  // useEffect(()=>{
  //     fetch('http://localhost:5000/users')
  //     .then(res=> res.json())
  //     .then(data=>setVisitors(data))
  // },[])


  return (
    <div>
    
      {revis.length === 0 && (
        <p className="text-center my-10 text-4xl  bg-slate-100 p-8 shadow-xl">
          "you should <br /> give some{" "}
          <span className="text-teal-600 font-bold">Review"</span>{" "}
        </p>
      )}

      {revis.map((rv) => (
        <div
          className=" photoURL w-10/12 mx-auto border border-slate-300 shadow-lg rounded-lg m-2 p-8 flex items-center justify-between"
          key={rv._id}>
          <div className="flex items-center">
            {user?.photoURL ? (
              <img src={user?.photoURL} alt="" />
            ) : (
              <p className="mr-4 text-5xl">
                <FaUserAlt />
              </p>
            )}

            <div className="flex">
              <div>
                <p>
                  <span className="font-semibold">{user?.displayName}</span>
                </p>
                <small className="flex items-center">
                  {" "}
                  <FaEnvelope className="text-normal text-info mr-2" />{" "}
                  {rv.email}
                </small>
              </div>
              <div className="divider divider-horizontal"></div>
              <p className="my-2">{rv.comment} </p>
            </div>
          </div>

          <div className="text-center">
            <button
              className="btn btn-outline btn-error btn-sm ml-4 mb-2"
              onClick={() => handleDelete(rv._id)}
            >
              {" "}
              <FaTrashAlt />{" "}
            </button>{" "}
            <br />
            <button className="btn btn-outline btn-success btn-sm ml-4">
              {" "}
              <FaEdit />{" "}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PersonalReview;
