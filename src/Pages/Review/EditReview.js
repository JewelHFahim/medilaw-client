import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../Context/AuthContex';
import { FaUserAlt, FaTrashAlt, FaEdit, FaEnvelope } from "react-icons/fa";


const EditReview = () => {

    const {user} = useContext(UserContext)
    

    const handleEdit = (event, id ) => {
        event.preventDefault();
        const form = event.target;
        const comment = form.comment.value;
        console.log(comment);

        const review = {
          comment
        };

        fetch(`https://medilaw-server.vercel.app/personalreview/${id}`,{
          method: "PATCH",
          headers: {
            'content-type': 'application/jason'
          },
          body: JSON.stringify(review)
        })
          .then((res) => res.json())
          .then((data) => console.log(data))
          .catch((error) => (error));
    }


    const [revis, setRevi] = useState([]);
    useEffect(() => {
      if (user?.email) {
        fetch(
          `https://medilaw-server.vercel.app/personalreview?email=${user?.email}`
        )
          .then((res) => res.json())
          .then((data) => setRevi(data))
          .catch((error) => (error));
      }
    }, [user?.email]);

    



    return (
        <div className='mt-12 w-9/12 mx-auto '>

{revis.map((rv) => (
        <div
          className=" photoURL w-10/12 mx-auto border border-slate-300 shadow-lg rounded-lg m-2 p-8 flex items-center justify-between"
          key={rv._id}
        >
          <div className="flex items-center border border-orange-400 w-full">
            <div className="text-left">
              {rv.photoURL ? (
                <img src={rv.photoURL} alt="" />
              ) : (
                <p className="mr-4 text-5xl">
                  <FaUserAlt />
                </p>
              )}
              <div>
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

            <form className="w-full text-center">
              <div className="divider divider-horizontal"></div>
              <textarea defaultValue={rv.comment} type="text "className="input input-bordered input-accent w-full" />
            <button onClick={()=>handleEdit(rv._id)} type='submit' className='btn btn-xs'>Submit</button>
            </form>
          </div>
          <div className="divider divider-horizontal"></div>

        </div>
      ))}

        </div>
    );
};

export default EditReview;