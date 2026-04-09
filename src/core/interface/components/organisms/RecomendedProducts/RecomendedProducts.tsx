import React from "react";

export default function RecomendedProducts({
  className,
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className="px-section-x flex flex-col gap-container-y">
      <section className="flex flex-row gap-card-gap items-center ">
        <span className="font-medium text-body-sm tracking-widest text-accent uppercase">Highlights</span>
        <h2 className="text-display-md w-fit whitespace-nowrap">Best opportunities</h2>
        <div className="flex h-0.5 w-full bg-border"></div>
      </section>
      <div className="h-32">Card list go here</div>
    </div>
  );
}
