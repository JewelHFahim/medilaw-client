import React from "react";

const Services = ({ service }) => {
  const { titile, img, description, price, rating } = service;

  return (
    <div>
      <div className="card card-compact min-h-full bg-base-100 shadow-xl">
        <figure>
          <img src={img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{titile}</h2>
          <p>{description}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-info">Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
