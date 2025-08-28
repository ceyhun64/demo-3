import React from "react";
import Navbar from "@/components/layout/navbar";
import HeroSection from "@/components/modules/home/carousel";
import Footer from "@/components/layout/footer";
import Products from "@/components/modules/home/products";
import ProductsRow from "@/components/modules/home/newArrivals";
import Subscribe from "@/components/modules/home/subscribe";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Products />
      <ProductsRow />
      <Subscribe />
      <Footer />
    </div>
  );
}