
import React from "react";
import Layout from "@/components/Layout";

const About = () => {
  return (
    <Layout>
      <div className="pt-32 pb-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 font-playfair text-restaurant-charcoal">
              About FOOD FEAST
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our journey of culinary excellence and passion for non-vegetarian cuisine
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80" 
                alt="Chef preparing food" 
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6 font-playfair text-restaurant-charcoal">Our Story</h2>
              <p className="text-gray-600 mb-6">
                FOOD FEAST was born from a simple passion: bringing people together through exceptional food. Founded in 2005 by renowned Chef Michael Rodriguez, our restaurant has become a sanctuary for those who appreciate the art of non-vegetarian cuisine.
              </p>
              <p className="text-gray-600 mb-6">
                What began as a small family-owned establishment has grown into one of the most celebrated dining destinations in the city. Our commitment to quality, innovation, and hospitality has earned us numerous accolades and a loyal customer base.
              </p>
              <p className="text-gray-600">
                At FOOD FEAST, we believe that dining is not just about food—it's about creating memorable experiences. Every dish that leaves our kitchen tells a story of tradition, creativity, and excellence.
              </p>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center font-playfair text-restaurant-charcoal">Our Philosophy</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-8 rounded-lg shadow-md text-center">
                <div className="bg-restaurant-burgundy rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
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
                <h3 className="text-xl font-bold mb-3 text-restaurant-charcoal">Quality Ingredients</h3>
                <p className="text-gray-600">
                  We source only the finest ingredients from local farmers and trusted suppliers, ensuring that each dish exceeds expectations.
                </p>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-lg shadow-md text-center">
                <div className="bg-restaurant-burgundy rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
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
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-restaurant-charcoal">Culinary Innovation</h3>
                <p className="text-gray-600">
                  Our chefs combine traditional techniques with modern innovations to create meals that are both familiar and excitingly new.
                </p>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-lg shadow-md text-center">
                <div className="bg-restaurant-burgundy rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-white"
                  >
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-restaurant-charcoal">Exceptional Service</h3>
                <p className="text-gray-600">
                  Our dedicated team is committed to providing attentive, personalized service that makes every visit memorable.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg shadow-lg mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center font-playfair text-restaurant-charcoal">Meet Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="mb-4 rounded-full overflow-hidden w-48 h-48 mx-auto">
                  <img 
                    src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" 
                    alt="Chef Michael Rodriguez" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-1 text-restaurant-charcoal">Michael Rodriguez</h3>
                <p className="text-restaurant-burgundy mb-3">Executive Chef & Founder</p>
                <p className="text-gray-600">
                  With over 25 years of experience, Chef Michael brings his passion for non-vegetarian cuisine to every dish at FOOD FEAST.
                </p>
              </div>
              
              <div className="text-center">
                <div className="mb-4 rounded-full overflow-hidden w-48 h-48 mx-auto">
                  <img 
                    src="https://images.unsplash.com/photo-1583394293214-28ded15ee548?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80" 
                    alt="Sofia Chen" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-1 text-restaurant-charcoal">Sofia Chen</h3>
                <p className="text-restaurant-burgundy mb-3">Head Chef</p>
                <p className="text-gray-600">
                  Sofia's innovative approach to traditional recipes has earned her recognition in the culinary world.
                </p>
              </div>
              
              <div className="text-center">
                <div className="mb-4 rounded-full overflow-hidden w-48 h-48 mx-auto">
                  <img 
                    src="https://images.unsplash.com/photo-1566554273541-37a9ca77b91f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" 
                    alt="James Wilson" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-1 text-restaurant-charcoal">James Wilson</h3>
                <p className="text-restaurant-burgundy mb-3">Restaurant Manager</p>
                <p className="text-gray-600">
                  James ensures that every guest at FOOD FEAST experiences impeccable service and hospitality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
