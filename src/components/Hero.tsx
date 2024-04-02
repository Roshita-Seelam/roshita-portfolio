"use client";

import React from "react";
import Image from "next/image";

import Button from "@/common/Form/Button";
import scroller from "@/hooks/scroller";
import { bio } from "@/constants/bio";
import { track } from '@vercel/analytics'

export default function Hero() {
  return (
    <div className="grid lg:grid-cols-12 grid-cols-1 lg:min-h-[630px]">
      <div className="lg:col-span-4 relative col-span-1 lg:block hidden">
        <Image
          src="https://r-prf.s3.ap-southeast-2.amazonaws.com/images/portfolio-hero-image.jpg"
          fill
          alt=""
          className="lg:object-contain !relative"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          fetchPriority="high"
        />
      </div>
      <div className="lg:grid lg:grid-cols-subgrid lg:col-span-8 col-span-1 bg-text-primary justify-center text-primary ">
        <div className="col-start-2 col-span-6 flex flex-col justify-center gap-6 lg:m-0 my-6 mx-4">
          <p className="text-2xl">Hello!</p>
          <h1 className="text-6xl font-black bg-gradient-to-r from-secondary to-text-secondary bg-clip-text text-transparent w-fit">
            I'm Roshita
          </h1>
          <p>{bio}</p>
          <Button
            onClick={() => {
              track('Scroll down to projects', {location: 'Hero'})
              scroller.to("projects", 100);
            }}
            className="relative group text-yellow-50 font-medium w-fit py-3 px-6 rounded-xl isolation-auto z-10 border-2 border-emerald-950 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-emerald-950 before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700 animate-bounce"
          >
            <span className="text-primary group-hover:text-text-primary">
              Checkout my projects
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
}
