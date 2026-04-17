import Image from "next/image";
import React from "react";

export default function AboutUs({
  className,
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`bg-alternative-background h-242 shadow-[0_0_0_5px_var(--color-background),0_0_0_15px_var(--color-border)] grid grid-cols-2 gap-container-x py-section-y ${className}`}
    >
      <div className="relative w-full h-full flex items-center justify-center px-container-x py-container-y">
        <div className="relative h-full aspect-2/3 border-6 border-secondary">
          <Image
            alt="Painting of a serene forest"
            src="/sereneforest.jpg"
            loading="eager"
            fill
            className="object-cover z-50"
          />
        </div>

        <div className="absolute -right-5 -bottom-3 h-2/3 aspect-2/3 z-55 border-6 border-secondary">
          <Image
            alt="Painting of a river that crosses a forest"
            src="/riverthroughforest.jpg"
            loading="eager"
            fill
            className="object-cover"
          />
          
        </div>
      </div>
      <div>
        <h3 className="text-secondary">Hello world</h3>
      </div>
    </div>
  );
}
