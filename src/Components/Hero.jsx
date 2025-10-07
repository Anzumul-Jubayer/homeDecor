import React from "react";
import imgOne from "../assets/image2.jpg";
import { Link } from "react-router";
const Hero = () => {
  return (
    <div
      className="hero h-180 my-10"
      style={{
        backgroundImage:
          `url(${imgOne})`,
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-3xl font-bold text-orange-200">Elegant & Welcoming</h1>
          <p className="mb-5 text-sky-200">
           Transform your living space into a masterpiece with stunning home decor. From timeless elegance to modern charm, we bring you carefully curated designs that reflect your unique style. Make every corner of your home warm, inviting, and truly unforgettable.
          </p>
          <Link to={'/home'} className="btn btn-primary">Get Started</Link>
          
        </div>
      </div>
    </div>
  );
};

export default Hero;
