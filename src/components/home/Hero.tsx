
import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        className="absolute top-0 left-0 min-w-full min-h-full object-cover"
      >
        <source
          src="https://static.videezy.com/system/resources/previews/000/049/025/original/F28.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 video-overlay"></div>

      {/* Content */}
      <div className="relative container-custom h-full flex flex-col justify-center items-center text-center text-white">
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-4 animate-fade-in font-playfair">
          FOOD <span className="text-restaurant-gold">FEAST</span>
        </h1>
        <p className="text-xl md:text-2xl font-light mb-8 max-w-3xl animate-slow-fade font-playfair">
          A Paradise for Meat Lovers
        </p>
        <div className="flex flex-col sm:flex-row gap-4 animate-slow-fade">
          <Link
            to="/menu"
            className="btn-primary"
          >
            Explore Menu
            <ArrowRight size={18} className="ml-2" />
          </Link>
          <Link
            to="/reservations"
            className="btn-secondary"
          >
            Reserve a Table
          </Link>
          <Link
            to="/order"
            className="btn-outline"
          >
            Order Online
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
