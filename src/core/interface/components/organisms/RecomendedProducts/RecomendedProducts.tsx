"use client";

import React, { useState, useEffect, useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { CardItem } from "../../molecules/CardItem/CardItem";
import { mockData } from "@/prisma/mockdata";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function RecomendedProducts({
  className,
}: React.HTMLAttributes<HTMLDivElement>) {
  const [isMounted, setIsMounted] = useState(false);
  const autoplayPlugin = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true }),
  );

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className={`flex flex-col px-2 py-12 min-h-fit ${className}`}>
      <section className="flex flex-row gap-card-gap items-center pb-container-y px-section-x">
        <span className="font-medium text-body-sm tracking-widest text-accent uppercase">
          Highlights
        </span>
        <h2 className="text-display-lg font-medium tracking-wide w-fit whitespace-nowrap">
          Best opportunities
        </h2>
        <div className="flex h-0.5 w-full bg-border"></div>
      </section>

      {isMounted ? (
        <Carousel
          className="w-full"
          plugins={[autoplayPlugin.current]}
          opts={{
            align: "start",
            loop: true,
            dragFree: true,
          }}
        >
          <CarouselContent className="-ml-4">
            {mockData.map((item, index) => (
              <CarouselItem
                key={index}
                className="p-card-gap pl-4 basis-full md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
              >
                <CardItem {...item} />
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="flex justify-center gap-4 py-12">
            <CarouselPrevious className="static translate-y-0 cursor-pointer touch-manipulation" />
            <CarouselNext className="static translate-y-0 cursor-pointer touch-manipulation" />
          </div>
          <div className="flex h-0.5 w-full bg-border"></div>
        </Carousel>
      ) : (
        <div className="h-140 w-full animate-pulse bg-muted rounded-xl"></div>
      )}
    </div>
  );
}
