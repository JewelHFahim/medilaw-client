import React from "react";
import { useLoaderData } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import Review from "../../Review/Review";


const ServiceDetails = () => {
  const singleService = useLoaderData();
  const { titile, img, price, rating, description } = singleService;

  return (
    <div>
      <div className="card lg:card-side bg-base-100 shadow-xl my-12 rounded-none">
        <figure className=" lg:w-1/2">
          <img src={img} alt="Album" />
        </figure>
        <div className="card-body lg:w-1/2">
          <h2 className="card-title">{titile}</h2>
          <p>{description}</p>
          <div className="card-actions justify-evenly flex">
            <p className="flex items-center">Rating: <span className="text-lg ml-1 font-semibold"> {rating}</span> <FaStar className="text-yellow-500 ml-2"/></p>
            <p className="flex items-center">Start From: <span className="text-lg ml-1 font-semibold mx-1">{price}</span>$</p>
          </div>
        </div>
      </div>
      <p className="text-center text-2xl text-teal-900">Users Reviews Here </p>
      <hr />
      <Review></Review>
      </div>
  );
};

export default ServiceDetails;
