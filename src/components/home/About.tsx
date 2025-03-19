
import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
                alt="Restaurant interior"
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-restaurant-gold p-6 rounded-lg shadow-lg hidden md:block">
              <p className="text-restaurant-charcoal text-lg font-playfair">
                Established in 2005
              </p>
            </div>
          </div>

          <div>
            <div className="mb-4">
              <span className="text-restaurant-burgundy font-medium">Our Story</span>
            </div>
            <h2 className="section-title mb-6">A Passion for Exceptional Cuisine</h2>
            <p className="text-gray-600 mb-6">
              FOOD FEAST was born from a simple love of bringing people together through exceptional food. Founded in 2005 by renowned Chef Michael Rodriguez, our restaurant has become a sanctuary for those who appreciate the art of non-vegetarian cuisine.
            </p>
            <p className="text-gray-600 mb-6">
              We source only the finest ingredients from local farmers and trusted suppliers, ensuring each dish that leaves our kitchen exceeds expectations. Our chefs combine traditional techniques with modern innovations to create meals that are both familiar and excitingly new.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start">
                <div className="bg-restaurant-burgundy rounded-full p-2 mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-white"
                  >
                    <path d="m7 11 2-2-2-2" />
                    <path d="M11 13h4" />
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-restaurant-charcoal mb-1">
                    Premium Quality
                  </h3>
                  <p className="text-gray-600 text-sm">
                    We source only the finest ingredients for all our dishes.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-restaurant-burgundy rounded-full p-2 mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-white"
                  >
                    <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 4-3 4-6.5-2.5 0-4 2.5-7 2.5s-4.5-2.5-7-2.5c0 3.5 1 6.5 4 6.5 1.25 0 2.5-1.06 4-1.06z" />
                    <path d="M12 15.94c1.5 0 2.75 1.06 4 1.06 3 0 4-3 4-6.5-2.5 0-4 2.5-7 2.5s-4.5-2.5-7-2.5c0 3.5 1 6.5 4 6.5 1.25 0 2.5-1.06 4-1.06z" />
                    <path d="M18 4.5v.5" />
                    <path d="m8 9 2 10" />
                    <path d="m14 9-2 10" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-restaurant-charcoal mb-1">
                    Skilled Chefs
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Our culinary team brings decades of expertise to every plate.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-restaurant-burgundy rounded-full p-2 mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-white"
                  >
                    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    <polyline points="9 22 9 12 15 12 15 22" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-restaurant-charcoal mb-1">
                    Elegant Ambiance
                  </h3>
                  <p className="text-gray-600 text-sm">
                    An atmosphere that complements our exquisite cuisine.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-restaurant-burgundy rounded-full p-2 mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-white"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="8" x2="12" y2="12" />
                    <line x1="12" y1="16" x2="12.01" y2="16" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-restaurant-charcoal mb-1">
                    Exceptional Service
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Attentive staff dedicated to making every visit memorable.
                  </p>
                </div>
              </div>
            </div>

            <Link to="/about" className="btn-outline">
              Learn More About Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
