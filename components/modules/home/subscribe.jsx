import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react"; // lucide-react ikon paketi

export default function AboneOl() {
  return (
    <section className="bg-[#182d1f] p-16 flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="text-white max-w-md">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight mb-4 text-green-100 font-[Playfair_Display]">
          Bültenimize Kaydolun
        </h2>
        <p className="text-green-100 mb-3 max-w-lg font-['Mozilla_Headline']">
          Mağazamızdan en son haberler ve fırsatlardan haberdar olun.
        </p>
      </div>

      <form className="w-full md:w-[600px] relative">
        <Input
          type="email"
          placeholder="E-posta adresinizi girin"
          className="w-full rounded-lg py-5 px-6 pr-16 text-gray-900 bg-white"
          required
        />
        <Button
          variant={"default"}
          size={"icon"}
          type="submit"
          aria-label="Abone ol"
          className="absolute right-1 top-1/2 -translate-y-1/2 bg-black rounded-full flex items-center justify-center"
        >
          <ArrowRight className="text-white" />
        </Button>
      </form>
    </section>
  );
}
