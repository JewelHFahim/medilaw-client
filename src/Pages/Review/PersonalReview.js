import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../Context/AuthContex";
import { FaUserAlt, FaTrashAlt, FaEdit, FaEnvelope } from "react-icons/fa";
import useTitle from "../../Hook/Hook";


const PersonalReview = () => {
  const { user } = useContext(UserContext);
  useTitle('My Reviews');
  const [revis, setRevi] = useState([]);




  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:5000/personalreview?email=${user?.email}`)
        .then((res) => res.json())
        .then((data) => setRevi(data))
        .catch((error) => console.error(error));
    }
  }, [user?.email]);




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
          }
        });
    }
  };

  
  //Review Update Section
  // const handleUpdate = (id, event) =>{
  //   event.preventDefault();
  //   const comment = event.target.comment.value;
  //   const upreview = { comment }
    
  //   fetch(`http://localhost:5000/personalreview/${id}`,{
  //     method: 'PUT',
  //     headers: {
  //       'content-type': 'application/json'
  //     },
  //     body: JSON.stringify(upreview)
  //   })
  //   .then(res=> res.json())
  //   .then(data => {
  //     console.log(data)
  //     if(data.modifiedCount > 0){
  //       alert('Updated Successfully')
  //     }
  //   })
  // }


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

            {rv.photoURL ? (
              <img src={rv.photoURL} alt="" />
            ) : (
              <p className="mr-4 text-5xl">
                <FaUserAlt />
              </p>
            )}

            <form className="flex">
              <div>
                <p><span className="font-semibold">{rv.name}</span></p>
                <small className="flex items-center"> <FaEnvelope className="text-normal text-info mr-2" />{rv.email}</small>
              </div>
              <div className="divider divider-horizontal"></div>
              <p className="my-2">{rv.comment} </p>
              {/* <textarea className="textarea textarea-info w-full" name="comment" defaultValue={rv.comment} type="text" placeholder="Your Review"></textarea> */}
              
            </form>
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
