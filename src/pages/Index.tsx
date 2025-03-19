
import React from "react";
import Layout from "@/components/Layout";
import Hero from "@/components/home/Hero";
import FeaturedDishes from "@/components/home/FeaturedDishes";
import About from "@/components/home/About";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <FeaturedDishes />
      <About />
    </Layout>
  );
};

export default Index;
