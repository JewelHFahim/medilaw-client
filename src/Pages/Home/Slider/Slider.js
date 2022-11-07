import React from "react";
import img1 from "../../../Assests/slider/img1.jpg";
import img2 from "../../../Assests/slider/img2.jpg";
import img3 from "../../../Assests/slider/img3.jpeg";
import "./Slider.css";

const Slider = () => {
  return (
    <div>
      <div className="carousel w-full my-8 rounded-lg ">
        {/* Slider-1 */}
        <div id="slide1" className="carousel-item relative w-full ">
          <div className="slider">
            <img src={img1} className="w-full" alt="" />
          </div>

          <div className="absolute left-10 top-1/2 ">
            <p className="text-4xl text-white">You Deserve The Best </p>
            <p className="text-6xl font-bold text-white">Defence Lawyers</p>
          </div>
          <button className="btn btn-outline btn-info absolute left-10 top-3/4 ">Contact US Now</button>
          <div className="absolute flex justify-end transform -translate-y-1/2 right-10 bottom-5">
            <a href="#slide3" className="btn btn-circle mr-2 text-info">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle text-info">
              ❯
            </a>
          </div>
        </div>

        {/* Slider-2 */}
        <div id="slide2" className="carousel-item relative w-full ">
          <div className="slider">
            <img src={img2} className="w-full" alt="" />
          </div>

          <div className="absolute left-10 top-1/2 ">
            <p className="text-4xl text-white">We Guide You Through</p>
            <p className="text-6xl font-bold text-white">Bankcrupcy Problems</p>
          </div>
          <button className="btn btn-outline btn-info absolute left-10 top-3/4 ">Contact US Now</button>
          <div className="absolute flex justify-end transform -translate-y-1/2 right-10 bottom-5">
            <a href="#slide1" className="btn text-info btn-circle mr-2">
              ❮
            </a>
            <a href="#slide3" className="btn text-info btn-circle">
              ❯
            </a>
          </div>
        </div>

        {/* Slider-3 */}
        <div id="slide3" className="carousel-item relative w-full ">
          <div className="slider">
            <img src={img3} className="w-full" alt="" />
          </div>

          <div className="absolute left-10 top-1/2 ">
            <p className="text-4xl text-white">We are Expert in </p>
            <p className="text-6xl font-bold text-white">Business litigation</p>
          </div>
          <button className="btn btn-outline btn-info absolute left-10 top-3/4 ">Contact US Now</button>
          <div className="absolute flex justify-end transform -translate-y-1/2 right-10 bottom-5">
            <a href="#slide2" className="btn btn-circle text-info mr-2">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle text-info">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
