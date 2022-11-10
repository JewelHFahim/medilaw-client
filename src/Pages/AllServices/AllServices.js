import React, { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { FaStar, FaArrowRight } from "react-icons/fa";
import ServiceTopSection from "../Home/Services/ServiceTopSection";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { UserContext } from "../../Context/AuthContex";

const AllServices = () => {
  const allservices = useLoaderData();

  const { user } = useContext(UserContext);

  const handleAddServices = (event) => {
    event.preventDefault();
    const form = event.target;
    const title = form.title.value;
    const img = form.img.value;
    const description = form.description.value;
    const price = form.price.value;
    const rating = form.rating.value;
    console.log(title, img, description, price, rating);

    const addService = {
      title,
      img,
      description,
      price,
      rating,
    };

    fetch("https://medilaw-server.vercel.app/services", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addService),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged > 0) {
          alert("Service Added Successfully");
          form.reset();
        }
      });
  };

  return (
    <div>
      <ServiceTopSection></ServiceTopSection>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 my-10">
        {allservices.map((allserv) => (
          <div key={allserv._id}>
            <div className="card card-compact min-h-full bg-base-100 shadow-xl">
              <figure>
                <PhotoProvider>
                  <PhotoView src={allserv.img}>
                    <img src={allserv.img} alt="" />
                  </PhotoView>
                </PhotoProvider>
              </figure>
              <div className="card-body">
                <h2 className="card-title">{allserv.titile}</h2>

                <p>
                  {allserv.description.length > 100 ? (
                    <div>{allserv.description.slice(0, 100) + "..."}</div>
                  ) : (
                    <p>{allserv.description}</p>
                  )}
                </p>

                <div className="card-actions justify-end flex">
                  <p className="flex items-center">
                    {allserv.rating}
                    <FaStar className="text-yellow-500 ml-2" />
                  </p>
                  <Link to={`/services/${allserv._id}`}>
                    <button className="btn btn-outline text-info">
                      {" "}
                      <FaArrowRight />{" "}
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {user?.email ? (
        <form
          onSubmit={handleAddServices}
          className="border border-info p-4 w-9/12 mx-auto text-center bg-slate-100 rounded-lg"
        >
          <p className="text-2xl text-slate-900">Add Service</p>
          <input
            name="title"
            type="text"
            placeholder="title"
            className="input input-bordered input-info mx-2 my-2 max-w-xs"
          />
          <input
            name="img"
            type="text"
            placeholder="img link"
            className="input input-bordered input-info  max-w-xs"
          />{" "}
          <br />
          <input
            name="price"
            type="number"
            placeholder="price"
            className="input input-bordered input-info mx-2 my-2 max-w-xs"
          />
          <input
            name="rating"
            type="number"
            placeholder="rating"
            className="input input-bordered input-info max-w-xs"
          />{" "}
          <br />
          <input
            name="description"
            type="text"
            placeholder="description"
            className="input input-bordered input-info mx-2 my-2 w-full max-w-xs"
          />
          <button type="submit" className="btn btn-success">
            Add Service
          </button>
        </form>
      ) : (
        <p className="text-2xl text-center border  border-teal-200 rounded-lg shadow-xl w-9/12 mx-auto py-5 ">
          Want to add a service?{" "}
          <Link
            to="/login"
            className="font-semibold text-success underline hover:text-emerald-700"
          >
            Login
          </Link>
        </p>
      )}
    </div>
  );
};

export default AllServices;
