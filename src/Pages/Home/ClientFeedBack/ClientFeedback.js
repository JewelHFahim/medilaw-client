import React from "react";
// import './ClientFeedBack.css'
import client from '../../../Assests/clients.jpg'

const ClientFeedback = () => {
  return (
    <div>
      <div className="hero  my-20 bg-pic">
        {/* <div className="hero-overlay bg-opacity-60"></div> */}
        <div><img src={client} alt="" /></div>
      </div>
    </div>
  );
};

export default ClientFeedback;
