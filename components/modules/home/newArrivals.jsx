"use client";
import * as React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";
import products from "@/data/products.json";

// const products = [
//   {
//     id: 1,
//     name: "Püskürtme Şişesi",
//     price: "₺150,00",
//     image: "/products/product2.jpg",
//   },
//   {
//     id: 2,
//     name: "Paşa Kılıcı",
//     price: "₺1099,99",
//     image: "/products/product3.jpg",
//   },
//   {
//     id: 3,
//     name: "Sansevieria",
//     price: "₺450,00",
//     image: "/products/product4.jpg",
//   },
//   {
//     id: 4,
//     name: "Aloe Vera",
//     price: "₺550,00",
//     image: "/products/product5.jpg",
//   },
//   { id: 5, name: "Kaktüs", price: "₺350,00", image: "/products/product6.jpg" },
// ];

export default function YeniUrunlerCarousel() {
  const [api, setApi] = useState(null);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap()); // İlk değer
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <div className="container mx-auto py-12 px-8 relative">
      {/* Başlık */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-3xl md:text-5xl lg:text-4xl font-extrabold tracking-tight mb-2 text-gray-900 font-[Playfair_Display]">
            Yeni Gelenler
          </h2>
          <p className='text-lg md:text-sm text-gray-600 mb-2 max-w-lg font-["Mozilla_Headline"] '>
            En yeni ürünlerimiz burada. Mağazamızdaki yeniliklere göz atın.
          </p>
        </div>
        <Link
          href="/products"
          className="text-sm font-medium text-gray-900 relative after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:bg-green-500 after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
        >
          Tümünü Gör
        </Link>
      </div>

      {/* Carousel */}
      <Carousel
        opts={{
          align: "start",
        }}
        setApi={setApi}
        className="w-full"
      >
        <CarouselContent>
          {products.map((product, index) => (
            <CarouselItem
              key={index}
              className="sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"
            >
              <div className="p-1 cursor-pointer">
                <Link href={`/products/${product.id}`}>
                  <Card className="p-0 m-0 rounded-2xl overflow-hidden hover:shadow-2xl transition-shadow duration-500">
                    <CardContent className="flex flex-col p-0 m-0">
                      <div className="relative w-full aspect-square">
                        <Image
                          src={product.image}
                          alt={product.name}
                          width={350}
                          height={600}
                          className="object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <p className="text-sm font-medium text-gray-900 transition-colors group-hover:text-green-600">
                          {product.name}
                        </p>
                        <p className="text-gray-600">{product.price}</p>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Butonlar */}
        <div className="flex justify-end mt-6 space-x-2">
          <CarouselPrevious className="static bg-gray-200 hover:bg-gray-300 rounded-full p-2 shadow-md" />
          <CarouselNext className="static bg-gray-200 hover:bg-gray-300 rounded-full p-2 shadow-md" />
        </div>

        {/* Alt progress bar */}
        <div className="flex justify-start ms-4">
          {products.map((_, index) => (
            <button
              key={index}
              onClick={() => api && api.scrollTo(index)}
              className={`h-1 transition-all ${
                current === index ? "bg-gray-900 w-8" : "bg-gray-300 w-4"
              } rounded-full`}
            />
          ))}
        </div>
      </Carousel>
    </div>
  );
}
