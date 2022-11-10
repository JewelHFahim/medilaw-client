import React, { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { UserContext } from "../../Context/AuthContex";
import SingleReview from "./SingleReview";
import toast, { Toaster } from 'react-hot-toast';


const Review = () => {

    const {user} = useContext(UserContext);
    const notify = () => toast.success('Review added Successfully');


    const handleSubmit = (event) =>{
        event.preventDefault();
        const form = event.target;
        const comment = form.comment.value;
        const email = user?.email;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        console.log(name, photoURL, email, comment);
        const review = {
             name, photoURL,  email, comment
        }

        fetch('http://localhost:5000/review',{
            method: "POST",
            headers: {
                'content-type': 'application/json',
                // authorization: `Bearer ${localStorage.getIem('mediLawToken')}`,
            },
            body: JSON.stringify(review)
        })
        .then(res=>res.json())
        .then((data) => {
            console.log(data);
            if (data.acknowledged > 0) {
              alert('Reveiw Added Successfully')
              event.target.reset();
            }
          })
    }

    const [reviews, setReviews] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/review')
        .then(res=> res.json())
        .then(data=>setReviews(data))
    },[])


  return (
    <div >
    {
        reviews.map(review => <SingleReview key = {review._id} review ={review} ></SingleReview> )
    }
    {
        user?.email ? 

     <form onSubmit={handleSubmit} className="w-9/12 mx-auto my-10">
     <p className=" ">Leave a Comment</p>
    
      <textarea className="textarea textarea-info w-full" name="comment" required type="text" placeholder="Your Review"></textarea>
      <input name="name"  type="text" placeholder="Name" required className="input input-bordered input-accent w-full max-w-xs mr-2" />
      <input name="photoURL"  type="photoURL" placeholder="photoURL" required className="input input-bordered input-accent w-full max-w-xs" />
      <input name="email"  type="email" defaultValue={user?.email} readOnly placeholder="email" className="input input-bordered input-accent w-full max-w-xs mt-2" />
      <br />
      <button onClick={notify} type="submit" className="btn btn-info mt-2">Submit</button>
      <Toaster position="top-center"/>
        </form>
        :
        <p className="text-center text-xl">Leave a Comment? <Link to="/login" className="text-teal-500" >Login</Link> </p>
    }


     
     
    </div>
  );
};

export default Review;
