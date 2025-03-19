
import React, { useState } from "react";
import Layout from "@/components/Layout";

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  category: string;
}

const menuItems: MenuItem[] = [
  {
    id: 1,
    name: "Grilled Ribeye Steak",
    description: "Prime ribeye steak grilled to perfection, served with roasted vegetables and truffle mashed potatoes.",
    price: "$36.99",
    image: "https://images.unsplash.com/photo-1529694157872-4e0c0f3b238b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    category: "main"
  },
  {
    id: 2,
    name: "Butter Chicken",
    description: "Tender chicken pieces cooked in a rich, creamy tomato sauce with aromatic spices.",
    price: "$24.99",
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    category: "main"
  },
  {
    id: 3,
    name: "Grilled Lobster Tail",
    description: "Fresh lobster tail grilled and basted with herb butter, served with drawn butter and lemon.",
    price: "$42.99",
    image: "https://images.unsplash.com/photo-1553247407-23251b7c2b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    category: "seafood"
  },
  {
    id: 4,
    name: "Lamb Chops",
    description: "Tender lamb chops marinated with rosemary and garlic, grilled to perfection.",
    price: "$32.99",
    image: "https://images.unsplash.com/photo-1432139555190-58524dae6a55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1176&q=80",
    category: "main"
  },
  {
    id: 5,
    name: "Chicken Wings",
    description: "Crispy fried chicken wings tossed in your choice of sauce: Buffalo, BBQ, or Honey Garlic.",
    price: "$14.99",
    image: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    category: "starters"
  },
  {
    id: 6,
    name: "Prawn Cocktail",
    description: "Succulent prawns served with a tangy cocktail sauce and fresh lemon wedge.",
    price: "$16.99",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1071&q=80",
    category: "starters"
  },
  {
    id: 7,
    name: "New York Cheesecake",
    description: "Creamy cheesecake with a graham cracker crust, topped with fresh berries.",
    price: "$9.99",
    image: "https://images.unsplash.com/photo-1533134242453-b3f7e7870249?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    category: "desserts"
  },
  {
    id: 8,
    name: "Chocolate Lava Cake",
    description: "Warm chocolate cake with a molten center, served with vanilla ice cream.",
    price: "$10.99",
    image: "https://images.unsplash.com/photo-1606313564200-e75d8e3fc2ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
    category: "desserts"
  }
];

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const categories = ["all", "starters", "main", "seafood", "desserts"];

  const filteredItems = activeCategory === "all"
    ? menuItems
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <Layout>
      <div className="pt-32 pb-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 font-playfair text-black">
              Our Menu
            </h1>
            <p className="text-xl text-black/70 max-w-3xl mx-auto">
              Explore our curated selection of premium non-vegetarian dishes, crafted with passion and the finest ingredients
            </p>
          </div>

          <div className="flex justify-center mb-10 overflow-x-auto">
            <div className="inline-flex space-x-2 p-1 bg-white rounded-lg shadow-md">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-md capitalize transition-all ${
                    activeCategory === category
                      ? "bg-restaurant-burgundy text-white"
                      : "bg-white text-black hover:bg-gray-100"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="menu-item bg-white rounded-lg overflow-hidden shadow-lg"
              >
                <div className="h-56 w-full overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-black">
                      {item.name}
                    </h3>
                    <span className="text-restaurant-gold font-bold">
                      {item.price}
                    </span>
                  </div>
                  <p className="text-black/70">{item.description}</p>
                  <div className="mt-4">
                    <button className="bg-restaurant-gold hover:bg-restaurant-gold/90 text-black font-medium py-2 px-4 rounded-md transition-all duration-300 text-sm">
                      Add to Order
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Menu;
