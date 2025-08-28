"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react"; // lucide-react icon paketi

const slides = [
  {
    id: 1,
    title: "Taptaze Çiçeklerle Tanışın",
    description:
      "Bahçenize ve evinize renk katacak en yeni çiçek koleksiyonumuzu keşfedin.",
    image: "/slider/slider1.jpg",
    buttonText: "Şimdi Alışveriş Yap",
  },
  {
    id: 2,
    title: "Zarif Vazolarla Dekorasyon",
    description:
      "Evinizin havasını değiştirecek şık ve modern vazo seçeneklerimize göz atın.",
    image: "/slider/slider2.jpg",
    buttonText: "Vazoları İncele",
  },
  {
    id: 3,
    title: "Doğadan İlham Alan Aranjmanlar",
    description:
      "Özel tasarım aranjmanlarımızla sevdiklerinize anlamlı hediyeler verin.",
    image: "/slider/slider3.jpg",
    buttonText: "Detayları Gör",
  },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full h-[700px] overflow-hidden ">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100 z-20" : "opacity-0 z-10"
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            layout="fill"
            objectFit="cover"
            priority={index === 0}
            quality={100}
          />
          <div className="absolute bottom-8 left-8 bg-opacity-50 p-8 max-w-lg rounded-md  text-white flex flex-col items-start">
            <h1 className="scroll-m-20 text-8xl font-extrabold tracking-tight text-balance text-left font-[Playfair_Display]">
              {slide.title}
            </h1>
            <p className='text-muted-foreground text-lg mt-4 font-["Mozilla_Headline"]'>
              {slide.description}
            </p>

            <Button className="cursor-pointer rounded-full mt-3 bg-white hover:bg-gray-100 text-black py-6 text-xl font-semibold">
              {slide.buttonText}
            </Button>
          </div>
        </div>
      ))}

      {/* Navigation Buttons with shadcn Button + icons */}
      <Button
        variant="ghost"
        size="icon"
        onClick={prevSlide}
        aria-label="Previous Slide"
      >
        <ChevronLeft size={24} />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        onClick={nextSlide}
        aria-label="Next Slide"
      >
        <ChevronRight size={24} />
      </Button>
    </div>
  );
}
