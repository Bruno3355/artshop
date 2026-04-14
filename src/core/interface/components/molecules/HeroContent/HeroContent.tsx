import { Button } from "@/components/ui/button";
import React from "react";

interface Props {
  className?: string;
}

export default function HeroContent({ className }: Props) {
  return (
    <div
      className={`${className} px-10 py-16 flex flex-col gap-y-card-gap`}
    >
      <p
        className="text-xs font-medium tracking-widest uppercase text-accent"
      >
        Exclusive Collection · 2026
      </p>

      <div className="flex flex-col gap-3">
        <h1
          className="text-display-xl font-serif text-secondary italic"
        >
          Art that <em>transcends</em> centuries
        </h1>
        <p
          className="text-body-lg text-accent"
        >
          Carefully curated paintings, vases, and rare pieces to collect what
          time has made precious.
        </p>
      </div>

      <Button
        className="w-fit tracking-widest text-xs uppercase hover:opacity-90 transition-opacity bg-accent text-foreground, border-0"
      >
        Explore Gallery
      </Button>
    </div>
  );
}