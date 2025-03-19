
import React, { useState } from "react";
import Layout from "@/components/Layout";

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: string;
}

const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1544148103-0773bf10d330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    alt: "Restaurant interior",
    category: "interior"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    alt: "Grilled steak",
    category: "food"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    alt: "Bar area",
    category: "interior"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    alt: "Pizza",
    category: "food"
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    alt: "Chef cooking",
    category: "chefs"
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    alt: "Dining area",
    category: "interior"
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1600891964092-4316c288032e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    alt: "Steak dish",
    category: "food"
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1581299894007-aaa50297cf16?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    alt: "Plating a dish",
    category: "chefs"
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1484980972926-edee96e0960d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    alt: "Gourmet dish",
    category: "food"
  }
];

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const categories = ["all", "food", "interior", "chefs"];

  const filteredImages = activeFilter === "all"
    ? galleryImages
    : galleryImages.filter(image => image.category === activeFilter);

  const openModal = (image: GalleryImage) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <Layout>
      <div className="pt-32 pb-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 font-playfair text-restaurant-charcoal">
              Gallery
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the ambiance, cuisine, and moments that make FOOD FEAST special
            </p>
          </div>

          <div className="flex justify-center mb-10">
            <div className="inline-flex space-x-2 p-1 bg-gray-100 rounded-lg">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`px-4 py-2 rounded-md capitalize transition-all ${
                    activeFilter === category
                      ? "bg-restaurant-burgundy text-white"
                      : "bg-transparent text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image) => (
              <div
                key={image.id}
                className="overflow-hidden rounded-lg shadow-lg cursor-pointer transform transition-transform hover:scale-105"
                onClick={() => openModal(image)}
              >
                <div className="relative h-64">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="text-white bg-restaurant-burgundy bg-opacity-80 py-2 px-4 rounded-md">
                      View Larger
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-4">
          <div className="relative max-w-4xl w-full">
            <button
              className="absolute top-4 right-4 bg-white text-black p-2 rounded-full z-10"
              onClick={closeModal}
            >
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
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-full h-auto max-h-[80vh] rounded-lg"
            />
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Gallery;
