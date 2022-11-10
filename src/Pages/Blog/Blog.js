import React from "react";
import { useLoaderData } from "react-router-dom";
import useTitle from "../../Hook/Hook";
import BlogDetails from "./BlogDetails";

const Blog = () => {
  const blogs = useLoaderData();

  useTitle("Blog");

  return (
    <div className="grid grid-cols-2 gap-5 my-20 w-11/12 mx-auto">

        {
          blogs.map( blog => <BlogDetails key ={blog._id} blog ={blog} ></BlogDetails>)
        }        
      
    </div>
  );
};

export default Blog;
