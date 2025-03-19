
import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface Dish {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  ingredients: string[];
}

const featuredDishes: Dish[] = [
  {
    id: 1,
    name: "Grilled Ribeye Steak",
    description: "Prime ribeye steak grilled to perfection, served with roasted vegetables and truffle mashed potatoes.",
    price: "$36.99",
    image: "https://images.unsplash.com/photo-1529694157872-4e0c0f3b238b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    ingredients: ["Prime ribeye steak", "Truffle oil", "Rosemary", "Garlic butter", "Sea salt"]
  },
  {
    id: 2,
    name: "Butter Chicken",
    description: "Tender chicken pieces cooked in a rich, creamy tomato sauce with aromatic spices.",
    price: "$24.99",
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    ingredients: ["Chicken", "Tomato", "Cream", "Butter", "Garam masala", "Fenugreek"]
  },
  {
    id: 3,
    name: "Grilled Lobster Tail",
    description: "Fresh lobster tail grilled and basted with herb butter, served with drawn butter and lemon.",
    price: "$42.99",
    image: "https://images.unsplash.com/photo-1553247407-23251b7c2b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    ingredients: ["Lobster tail", "Garlic butter", "Lemon", "Parsley", "Sea salt"]
  },
  {
    id: 4,
    name: "Lamb Chops",
    description: "Tender lamb chops marinated with rosemary and garlic, grilled to perfection.",
    price: "$32.99",
    image: "https://plus.unsplash.com/premium_photo-1664472636118-8ac71b125bf4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    ingredients: ["Lamb chops", "Rosemary", "Garlic", "Thyme", "Dijon mustard"]
  }
];

const FeaturedDishes = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">Chef's Specials</h2>
          <p className="section-subtitle">
            Indulge in our exquisite selection of gourmet dishes crafted with passion and the finest ingredients
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredDishes.map((dish) => (
            <div key={dish.id} className="menu-item bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="relative h-64 w-full overflow-hidden">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="menu-overlay absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                  <Link
                    to={`/menu/${dish.id}`}
                    className="bg-restaurant-gold hover:bg-restaurant-gold/90 text-restaurant-charcoal px-4 py-2 rounded-md transition-all duration-300"
                  >
                    View Details
                  </Link>
                </div>
              </div>
              <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-restaurant-charcoal">{dish.name}</h3>
                  <span className="text-restaurant-burgundy font-bold">{dish.price}</span>
                </div>
                <p className="text-gray-600 text-sm mb-4">{dish.description}</p>
                <div className="flex flex-wrap gap-2">
                  {dish.ingredients.slice(0, 3).map((ingredient, index) => (
                    <span
                      key={index}
                      className="inline-block bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full"
                    >
                      {ingredient}
                    </span>
                  ))}
                  {dish.ingredients.length > 3 && (
                    <span className="inline-block bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full">
                      +{dish.ingredients.length - 3} more
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/menu"
            className="btn-primary"
          >
            View Full Menu
            <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedDishes;
