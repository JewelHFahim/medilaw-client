import React from "react";
import { FaStar, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";



const Services = ({ service }) => {
  const {_id, titile, img, description, rating, price } = service;

  return (
    <div>
      <div className="card card-compact min-h-full bg-base-100 shadow-xl">
        <figure>
          <img src={img} alt="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{titile}</h2>
          <p>{description}</p>
          <div className="card-actions justify-end flex">
            <p className="flex items-center">{rating}<FaStar className="text-yellow-500 ml-2"/></p>
            <p className="flex items-center">{price} $</p>
            <Link to={`/services/${_id}`}>
            <button className="btn btn-outline text-info"><FaArrowRight/></button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
