import React from "react";
import { useLoaderData } from "react-router-dom";

const SingleBlog = () => {
  const blogs = useLoaderData();

  const {title, image, description } = blogs;

  return (
    <div>
      <div className="card w-9/12 my-12 mx-auto bg-base-100 shadow-2xl">
        <figure>
          <img src={image} alt="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
