import React from "react";

const Statistics = () => {
  return (
    <div>
      <div
        className="hero rounded-lg"
        style={{ backgroundImage: `url("https://placeimg.com/1000/800/arch")` }}
      >
        <div className="hero-overlay bg-opacity-60 rounded-lg"></div>

        <div className=" hero flex justify-around py-16 text-white text-center">
          <div>
            <p className="text-yellow-500 font-bold">Client Consultations</p>
            <h1 className="mb-5 text-5xl font-bold ">300+</h1>
          </div>
          <div>
            <p className="text-yellow-500 font-bold">Successful Cases</p>
            <h1 className="mb-5 text-5xl font-bold">95%</h1>
          </div>
          <div>
            <p className="text-yellow-500 font-bold">
              Recovered cost for clients
            </p>
            <h1 className="mb-5 text-5xl font-bold">5mIns</h1>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Statistics;
