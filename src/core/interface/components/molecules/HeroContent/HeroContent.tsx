import { Button } from "@/components/ui/button";
import React from "react";

interface Props {
  className?: string;
}

export default function HeroContent({ className }: Props) {
  return (
    <div
      className={`${className} px-14 py-16 bg-amber-50/30 rounded-4xl flex flex-col gap-y-card-gap`}
    >
      <h2 className="uppercase font-bold">Exclusive collection 2026</h2>
      <div>
        <h1 className="text-display-xl italic font-semibold">
          Art that <span className="italic ">transcends</span> centuries
        </h1>
        <span className="text-body-lg">
          Carefully curated paintings, vases, and rare pieces to collect what
          time has made precious.
        </span>
      </div>
      <Button className={"bg-secondary text-primary hover:text-secondary hover:bg-accent"}>Explore Gallery</Button>
    </div>
  );
}
