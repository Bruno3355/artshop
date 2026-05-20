"use client";

import React, { useState, useEffect, useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { CardRecomendedItem } from "../../molecules/Cards/CardIRecommendedtem";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Product } from "@/src/core/domain/entities/product";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  products: Product[];
}

export default function RecomendedProductsClient({
  products,
  className,
}: Props) {
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
            loop: true,
            dragFree: true,
          }}
        >
          <CarouselContent className="gap-4">
            {products.map((product) => (
              <CarouselItem
                key={product.id}
                className="basis-auto w-72 shrink-0 my-6"
              >
                <CardRecomendedItem
                  title={product.name}
                  description={product.description ?? ""}
                  price={product.price}
                  slug={product.slug}
                  badge={product.category.name}
                  image={{
                    source: product.imageUrl ?? "",
                    miniature: product.miniature ?? "",
                    alt: product.name,
                  }}
                />
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
