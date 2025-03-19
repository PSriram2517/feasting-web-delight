
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Facebook, Instagram, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { title: "Home", path: "/" },
    { title: "Menu", path: "/menu" },
    { title: "About Us", path: "/about" },
    { title: "Gallery", path: "/gallery" },
    { title: "Reservations", path: "/reservations" },
    { title: "Order Online", path: "/order" },
    { title: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={`w-full fixed top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-restaurant-charcoal shadow-lg py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <h1 className="text-2xl font-bold text-white">
            FOOD <span className="text-restaurant-gold">FEAST</span>
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.title}
              to={link.path}
              className={`text-white hover:text-restaurant-gold transition-colors duration-300 ${
                location.pathname === link.path ? "text-restaurant-gold" : ""
              }`}
            >
              {link.title}
            </Link>
          ))}
          
          {/* Social Icons */}
          <div className="flex items-center space-x-4 pl-4 border-l border-white/20">
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

          {/* Call Now Button */}
          <a href="tel:+1234567890" className="flex items-center bg-restaurant-burgundy hover:bg-restaurant-burgundy/90 text-white px-4 py-2 rounded-md ml-4 transition-all duration-300">
            <Phone size={16} className="mr-2" />
            <span>Call Now</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMenu}
            className="text-white hover:bg-white/10"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-restaurant-charcoal shadow-lg">
          <div className="container-custom py-5 flex flex-col">
            {navLinks.map((link) => (
              <Link
                key={link.title}
                to={link.path}
                className={`text-white py-3 px-4 hover:bg-white/10 rounded-md transition-colors ${
                  location.pathname === link.path ? "text-restaurant-gold" : ""
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.title}
              </Link>
            ))}
            
            {/* Social and Call Now for Mobile */}
            <div className="flex items-center space-x-4 mt-4 p-4 border-t border-white/10">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-restaurant-gold transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-restaurant-gold transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-restaurant-gold transition-colors">
                <Twitter size={20} />
              </a>
              <a href="tel:+1234567890" className="flex items-center bg-restaurant-burgundy hover:bg-restaurant-burgundy/90 text-white px-4 py-2 rounded-md ml-auto transition-all duration-300">
                <Phone size={16} className="mr-2" />
                <span>Call Now</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
