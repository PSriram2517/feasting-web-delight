
import React, { useState } from "react";
import Layout from "@/components/Layout";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { MinusCircle, PlusCircle, ShoppingCart, Trash2 } from "lucide-react";

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

interface CartItem extends MenuItem {
  quantity: number;
}

const menuItems: MenuItem[] = [
  {
    id: 1,
    name: "Grilled Ribeye Steak",
    description: "Prime ribeye steak grilled to perfection, served with roasted vegetables and truffle mashed potatoes.",
    price: 36.99,
    image: "https://images.unsplash.com/photo-1529694157872-4e0c0f3b238b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    category: "main"
  },
  {
    id: 2,
    name: "Butter Chicken",
    description: "Tender chicken pieces cooked in a rich, creamy tomato sauce with aromatic spices.",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    category: "main"
  },
  {
    id: 3,
    name: "Grilled Lobster Tail",
    description: "Fresh lobster tail grilled and basted with herb butter, served with drawn butter and lemon.",
    price: 42.99,
    image: "https://images.unsplash.com/photo-1553247407-23251b7c2b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    category: "seafood"
  },
  {
    id: 4,
    name: "Lamb Chops",
    description: "Tender lamb chops marinated with rosemary and garlic, grilled to perfection.",
    price: 32.99,
    image: "https://plus.unsplash.com/premium_photo-1664472636118-8ac71b125bf4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    category: "main"
  },
  {
    id: 5,
    name: "Chicken Wings",
    description: "Crispy fried chicken wings tossed in your choice of sauce: Buffalo, BBQ, or Honey Garlic.",
    price: 14.99,
    image: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    category: "starters"
  },
  {
    id: 6,
    name: "Prawn Cocktail",
    description: "Succulent prawns served with a tangy cocktail sauce and fresh lemon wedge.",
    price: 16.99,
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1071&q=80",
    category: "starters"
  },
  {
    id: 7,
    name: "New York Cheesecake",
    description: "Creamy cheesecake with a graham cracker crust, topped with fresh berries.",
    price: 9.99,
    image: "https://images.unsplash.com/photo-1533134242453-b3f7e7870249?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    category: "desserts"
  },
  {
    id: 8,
    name: "Chocolate Lava Cake",
    description: "Warm chocolate cake with a molten center, served with vanilla ice cream.",
    price: 10.99,
    image: "https://images.unsplash.com/photo-1606313564200-e75d8e3fc2ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
    category: "desserts"
  }
];

const OrderOnline = () => {
  const { toast } = useToast();
  const [cart, setCart] = useState<CartItem[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const categories = ["all", "starters", "main", "seafood", "desserts"];

  const filteredItems = activeCategory === "all"
    ? menuItems
    : menuItems.filter(item => item.category === activeCategory);

  const addToCart = (item: MenuItem) => {
    setCart(prev => {
      const existingItem = prev.find(cartItem => cartItem.id === item.id);
      if (existingItem) {
        return prev.map(cartItem => 
          cartItem.id === item.id 
            ? { ...cartItem, quantity: cartItem.quantity + 1 } 
            : cartItem
        );
      } else {
        return [...prev, { ...item, quantity: 1 }];
      }
    });
    
    toast({
      title: "Added to cart",
      description: `${item.name} has been added to your cart.`,
    });
  };

  const removeFromCart = (id: number) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    
    setCart(prev => 
      prev.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleCheckout = () => {
    toast({
      title: "Order placed successfully!",
      description: "Your delicious food will be on its way soon.",
    });
    setCart([]);
  };

  return (
    <Layout>
      <div className="pt-32 pb-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 font-playfair text-restaurant-charcoal">
              Order Online
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Enjoy our delicious non-vegetarian delicacies from the comfort of your home
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="flex justify-center mb-10 overflow-x-auto">
                <div className="inline-flex space-x-2 p-1 bg-white rounded-lg shadow-md">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setActiveCategory(category)}
                      className={`px-4 py-2 rounded-md capitalize transition-all ${
                        activeCategory === category
                          ? "bg-restaurant-burgundy text-white"
                          : "bg-white text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredItems.map((item) => (
                  <div
                    key={item.id}
                    className="menu-item bg-white rounded-lg overflow-hidden shadow-lg"
                  >
                    <div className="h-48 w-full overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                      />
                    </div>
                    <div className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-lg font-bold text-restaurant-charcoal">
                          {item.name}
                        </h3>
                        <span className="text-restaurant-burgundy font-bold">
                          ${item.price.toFixed(2)}
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm mb-3">{item.description}</p>
                      <Button 
                        onClick={() => addToCart(item)} 
                        className="w-full bg-restaurant-gold hover:bg-restaurant-gold/90 text-restaurant-charcoal"
                      >
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-lg p-6 sticky top-28">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-restaurant-charcoal font-playfair">Your Cart</h2>
                  <div className="flex items-center">
                    <ShoppingCart className="text-restaurant-burgundy mr-2" />
                    <span className="bg-restaurant-burgundy text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">
                      {cart.reduce((total, item) => total + item.quantity, 0)}
                    </span>
                  </div>
                </div>

                {cart.length === 0 ? (
                  <div className="text-center py-8">
                    <ShoppingCart className="mx-auto mb-4 text-gray-400" size={48} />
                    <p className="text-gray-500">Your cart is empty</p>
                    <p className="text-sm text-gray-400 mt-2">Add some delicious items to get started</p>
                  </div>
                ) : (
                  <>
                    <div className="divide-y">
                      {cart.map((item) => (
                        <div key={item.id} className="py-4">
                          <div className="flex justify-between">
                            <div className="flex-1">
                              <h4 className="font-semibold text-restaurant-charcoal">{item.name}</h4>
                              <p className="text-sm text-gray-500">${item.price.toFixed(2)} each</p>
                            </div>
                            <div className="text-right">
                              <p className="font-bold text-restaurant-burgundy">
                                ${(item.price * item.quantity).toFixed(2)}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center justify-between mt-2">
                            <div className="flex items-center">
                              <Button
                                variant="outline"
                                size="icon"
                                className="h-8 w-8 rounded-full"
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              >
                                <MinusCircle className="h-4 w-4" />
                              </Button>
                              <span className="mx-2 w-8 text-center">{item.quantity}</span>
                              <Button
                                variant="outline"
                                size="icon"
                                className="h-8 w-8 rounded-full"
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              >
                                <PlusCircle className="h-4 w-4" />
                              </Button>
                            </div>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8 text-gray-500 hover:text-red-500"
                              onClick={() => removeFromCart(item.id)}
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="border-t border-gray-200 mt-4 pt-4">
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-600">Subtotal:</span>
                        <span className="font-semibold">${calculateTotal().toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-600">Delivery Fee:</span>
                        <span className="font-semibold">$5.00</span>
                      </div>
                      <div className="flex justify-between text-lg font-bold mt-4">
                        <span>Total:</span>
                        <span className="text-restaurant-burgundy">${(calculateTotal() + 5).toFixed(2)}</span>
                      </div>

                      <Tabs defaultValue="delivery" className="mt-6">
                        <TabsList className="grid w-full grid-cols-2">
                          <TabsTrigger value="delivery">Delivery</TabsTrigger>
                          <TabsTrigger value="pickup">Pickup</TabsTrigger>
                        </TabsList>
                        <TabsContent value="delivery" className="mt-4">
                          <div className="space-y-4">
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-1">Delivery Address</label>
                              <Input placeholder="Enter your address" />
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                              <Input placeholder="Enter your phone number" />
                            </div>
                          </div>
                        </TabsContent>
                        <TabsContent value="pickup" className="mt-4">
                          <Card>
                            <CardContent className="pt-6">
                              <p className="text-center text-gray-700 mb-4">Pickup from our restaurant location:</p>
                              <p className="text-center font-medium">123 Gourmet Street, Culinary District</p>
                              <p className="text-center text-sm text-gray-500 mt-2">Your order will be ready in approximately 30 minutes</p>
                            </CardContent>
                          </Card>
                        </TabsContent>
                      </Tabs>

                      <Button 
                        className="w-full mt-6 bg-restaurant-burgundy hover:bg-restaurant-burgundy/90"
                        onClick={handleCheckout}
                      >
                        Place Order
                      </Button>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default OrderOnline;
