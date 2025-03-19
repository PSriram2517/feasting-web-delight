
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Layout from "@/components/Layout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="min-h-screen pt-32 flex items-center justify-center bg-gray-50">
        <div className="text-center px-4">
          <h1 className="text-8xl font-bold text-restaurant-burgundy mb-4 font-playfair">404</h1>
          <p className="text-2xl text-gray-700 mb-6 max-w-md mx-auto">
            Oops! It seems the page you're looking for is not on our menu.
          </p>
          <Link
            to="/"
            className="btn-primary"
          >
            Return to Home
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
