
import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-restaurant-charcoal text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4 font-playfair">
              FOOD <span className="text-restaurant-gold">FEAST</span>
            </h3>
            <p className="text-gray-300 mb-4">
              A paradise for meat lovers, offering the finest selection of gourmet non-vegetarian cuisine in an elegant dining atmosphere.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-restaurant-gold transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-restaurant-gold transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-restaurant-gold transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-4 font-playfair">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-restaurant-gold transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/menu" className="text-gray-300 hover:text-restaurant-gold transition-colors">Our Menu</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-restaurant-gold transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-300 hover:text-restaurant-gold transition-colors">Gallery</Link>
              </li>
              <li>
                <Link to="/reservations" className="text-gray-300 hover:text-restaurant-gold transition-colors">Reservations</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-restaurant-gold transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-4 font-playfair">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="mr-2 mt-1 text-restaurant-gold" size={18} />
                <span className="text-gray-300">123 Gourmet Street, Foodie District, New York, NY 10001</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 text-restaurant-gold" size={18} />
                <a href="tel:+1234567890" className="text-gray-300 hover:text-restaurant-gold transition-colors">+1 (234) 567-890</a>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 text-restaurant-gold" size={18} />
                <a href="mailto:info@foodfeast.com" className="text-gray-300 hover:text-restaurant-gold transition-colors">info@foodfeast.com</a>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="text-xl font-bold mb-4 font-playfair">Opening Hours</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <Clock className="mr-2 mt-1 text-restaurant-gold" size={18} />
                <div>
                  <p className="text-gray-300">Monday - Friday</p>
                  <p className="text-white">11:00 AM - 10:00 PM</p>
                </div>
              </li>
              <li className="flex items-start mt-2">
                <Clock className="mr-2 mt-1 text-restaurant-gold" size={18} />
                <div>
                  <p className="text-gray-300">Saturday - Sunday</p>
                  <p className="text-white">10:00 AM - 11:00 PM</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-gray-700 text-center text-gray-400">
          <p>© {new Date().getFullYear()} FOOD FEAST. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
