import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../Context/AuthContex";
import SingleReview from "./SingleReview";

const Review = () => {
    
    const {user} = useContext(UserContext);

    const handleSubmit = (event) =>{
        event.preventDefault();
        const comment = event.target.comment.value;
        const email = user?.email;
        const service_id = user?._id;
        console.log(service_id , comment, email);
        const review = {
            comment, email, service_id 
        }

        fetch('http://localhost:5000/review',{
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
        .then(res=>res.json)
        .then(data=>console.log(data))
    }

    const [reviews, setReviews] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/review')
        .then(res=> res.json())
        .then(data=>setReviews(data))
    },[])

    // const [revis, setRevi] = useState([]);
    // useEffect(() => {
    //   if (user?.email) {
    //     fetch(`http://localhost:5000/review?email=${user?.email}`)
    //       .then((res) => res.json())
    //       .then((data) => setRevi(data))
    //       .catch((error) => console.error(error));
    //   }
    // }, [user?.email]);


  return (
    <div >
    {
        reviews.map(review => <SingleReview key = {review._id} review ={review} ></SingleReview> )
    }
    {
        user?.email ? 

     <form onSubmit={handleSubmit} className="w-9/12 mx-auto my-10">
     <p className=" ">Leave a Comment</p>
    
      <textarea className="textarea textarea-info w-full" name="comment" type="text" placeholder="Your Review"></textarea>
      <input name="email"  type="email" defaultValue={user?.email} readOnly placeholder="email" className="input input-bordered input-accent w-full max-w-xs" />
      <br />
      <button type="submit" className="btn btn-info mt-2">Submit</button>
        </form>
        :
        <p className="text-center text-xl">Leave a Comment? <Link to="/login" className="text-teal-500" >Login</Link> </p>
    }


     
     
    </div>
  );
};

export default Review;