import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useTitle from "../../../Hook/Hook";
import ClientFeedback from "../ClientFeedBack/ClientFeedback";
import Services from "../Services/Services";
import ServiceTopSection from "../Services/ServiceTopSection";
import Slider from "../Slider/Slider";
import Statistics from "../Statistics/Statistics";

const Home = () => {
  const [services, setServices] = useState([]);
  useTitle('Home');


  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div>
      <Slider></Slider>
      <div>
        <ServiceTopSection></ServiceTopSection>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 my-10">
          {services.slice(0-3).map((service) => (
            <Services key={service._id} service={service}></Services>
          ))}
        </div>
        <div className="text-center mb-8">
          <Link to="/services">
            <button className="btn btn-outline btn-info  text-center">
              See more
            </button>
          </Link>
        </div>
      </div>
      <Statistics></Statistics>
      <ClientFeedback></ClientFeedback>
    </div>
  );
};

export default Home;
