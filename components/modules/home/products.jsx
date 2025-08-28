import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import products from "@/data/products.json";

export default function Products() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans flex flex-col items-center justify-center p-8 lg:p-16">
      <div className="container mx-auto flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">
        {/* Sol metin ve buton */}
        <div className="flex-1 flex flex-col justify-center items-center lg:items-start text-center lg:text-left sticky top-20 self-start max-w-md">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4 text-gray-900 font-[Playfair_Display]">
            Öne Çıkan Koleksiyon
          </h2>
          <p className='text-lg md:text-xl text-gray-600 mb-8 max-w-lg font-["Mozilla_Headline"] '>
            En yeni bitki koleksiyonumuzla evinizi canlandırın. Doğanın
            ferahlığını ve huzurunu yaşam alanlarınıza taşıyın.
          </p>
          <Button size="lg" variant="outline">
            Hepsini Gör
          </Button>
        </div>

        {/* Ürün kartları */}
        <div className="flex-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.slice(0, 6).map((product) => (
            <div
              key={product.id}
              className="group cursor-pointer overflow-hidden rounded-2xl hover:shadow-2xl transition-shadow duration-500"
            >
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
          ))}
        </div>
      </div>
    </div>
  );
}
