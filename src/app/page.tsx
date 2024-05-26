"use client";
import Image from "next/image";
import AppModule from "./app.module";
import { Slider1, Slider2 } from "@lib/components/slider";

import "swiper/css";
import Banner1 from "./lib/components/banner/Banner1";
import { Card1, CategoriesLanding, MainFooter } from "@lib/components";

export default function Home() {
  return (
    <div className="w-full">
      <Slider1 />
      <main className="px-2 flex flex-col mt-4 gap-y-4 ">
        <Banner1 />
        <Slider2 />
        <CategoriesLanding />

        <div className="w-full h-[400px]"></div>
      </main>
      <MainFooter />
    </div>
  );
}
