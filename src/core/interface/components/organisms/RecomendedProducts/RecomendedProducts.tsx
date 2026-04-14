"use client";

import React, { useState, useEffect } from "react";
import { CardItem } from "../../molecules/CardItem/CardItem";
import { Grid } from "../../atoms/Grid/Grid";
import { Col } from "../../atoms/Col/Col";
import Container from "../../atoms/Container/Container";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const mockData = [
  {
    image: {
      source: "heropainting.jpg",
      alt: "placeholder",
    },
    title: "Oil painting",
    description: "XX Century canvas",
    badge: "Exclusive deal",
  },
  {
    image: {
      source: "heropainting.jpg",
      alt: "placeholder",
    },
    title: "Awesome painting",
    description: "XXX Century canvas",
    badge: "90% discount",
  },
  {
    image: {
      source: "heropainting.jpg",
      alt: "placeholder",
    },
    title: "Awesome painting",
    description: "XXX Century canvas",
    badge: "90% discount",
  },
  {
    image: {
      source: "heropainting.jpg",
      alt: "placeholder",
    },
    title: "Awesome painting",
    description: "XXX Century canvas",
    badge: "90% discount",
  },
  {
    image: {
      source: "heropainting.jpg",
      alt: "placeholder",
    },
    title: "Awesome painting",
    description: "XXX Century canvas",
    badge: "90% discount",
  },
];

export default function RecomendedProducts({
  className,
}: React.HTMLAttributes<HTMLDivElement>) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="px-section-x flex flex-col">
      <section className="flex flex-row gap-card-gap items-center pb-section-y">
        <span className="font-medium text-body-sm tracking-widest text-accent uppercase">
          Highlights
        </span>
        <h2 className="text-display-md w-fit whitespace-nowrap">
          Best opportunities
        </h2>
        <div className="flex h-0.5 w-full bg-border"></div>
      </section>

      {isMounted ? (
        <div className="w-full px-12 md:px-16">
          <Carousel
            className="w-full"
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
                  className="pl-4 basis-full md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
                >
                  <CardItem {...item} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="z-50 cursor-pointer touch-manipulation" />
            <CarouselNext className="z-50 cursor-pointer touch-manipulation" />
          </Carousel>
        </div>
      ) : (
        <div className="h-140 w-full animate-pulse bg-muted rounded-xl"></div>
      )}
    </div>
  );
}
