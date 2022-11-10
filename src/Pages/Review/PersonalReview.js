import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../Context/AuthContex";
import { FaUserAlt, FaTrashAlt, FaEdit, FaEnvelope } from "react-icons/fa";
import useTitle from "../../Hook/Hook";
import { Link } from "react-router-dom";

const PersonalReview = () => {

  const { user } = useContext(UserContext);
  useTitle("My Reviews");
  const [revis, setRevi] = useState([]);

  useEffect(() => {
    if (user?.email) {
      fetch(
        `https://medilaw-server.vercel.app/personalreview?email=${user?.email}`
      )
        .then((res) => res.json())
        .then((data) => setRevi(data))
        .catch((error) => console.error(error));
    }
  }, [user?.email]);

  const handleDelete = (id) => {
    const agreed = window.confirm("Are you sure want to Delete?");
    if (agreed) {
      fetch(`https://medilaw-server.vercel.app/personalreview/${id}`, {
        method: "DELETE",
        headers: {
          'content-type': 'application/json',
          authorization: `Bearer ${localStorage.getItem('mediLawToken')}`,

        }
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Deleted Successfully");
          }
        });
    }
  };



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
          key={rv._id}
        >
          <div className="flex items-center">
            <div className="text-left">
              {/* Personal Review Section Photo */}
              {rv.photoURL ? (
                <img src={rv.photoURL} alt="" />
              ) : (
                <p className="mr-4 text-5xl">
                  <FaUserAlt />
                </p>
              )}
              <div>
                {/* Name and Email Section */}
                <p>
                  <span className="font-semibold">{rv.name}</span>
                </p>
                <small className="flex items-center">
                  {" "}
                  <FaEnvelope className="text-normal text-info mr-2" />
                  {rv.email}
                </small>
              </div>
            </div>

            <form className="flex">
              <div className="divider divider-horizontal"></div>
              <p className="my-2">{rv.comment} </p>
              {/* <textarea className="textarea textarea-info w-full" name="comment" defaultValue={rv.comment} type="text" placeholder="Your Review"></textarea> */}
            </form>
          </div>
          <div className="divider divider-horizontal"></div>

          <div className="text-center">
            <button
              className="btn btn-outline btn-error btn-sm ml-4 mb-2"
              onClick={() => handleDelete(rv._id)}
            >
              <FaTrashAlt />
            </button>
            <br />
            <Link to={`/editreview/${rv._id}`}><button className="btn btn-outline btn-success btn-sm ml-4">
              <FaEdit />
            </button></Link>
          </div>
        </div>
      ))}
      
    </div>
  );
};

export default PersonalReview;
