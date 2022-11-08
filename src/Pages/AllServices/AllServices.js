import React from "react";
import { useLoaderData } from "react-router-dom";
import { FaStar, FaArrowRight } from "react-icons/fa";
import ServiceTopSection from "../Home/Services/ServiceTopSection";

const AllServices = () => {
  const allservices = useLoaderData();

  return (
    <div>
    <ServiceTopSection></ServiceTopSection>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 my-10'>
      {allservices.map((allserv) => (
        <div key = {allserv._id}>

          
          <div className="card card-compact min-h-full bg-base-100 shadow-xl">
            <figure>
              <img src={allserv.img} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{allserv.titile}</h2>
              <p>{allserv.description}</p>
              <div className="card-actions justify-end flex">
                <p className="flex items-center">
                  {allserv.rating}
                  <FaStar className="text-yellow-500 ml-2" />
                </p>
                <button className="btn btn-outline text-info">
                  <FaArrowRight />
                </button>
              </div>
            </div>
          </div>
          </div>

        
      ))}
    </div>
    </div>
  );
};

export default AllServices;