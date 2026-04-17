import Image from "next/image";
import React from "react";
import { Grid } from "../../atoms/Grid/Grid";
import { Col } from "../../atoms/Col/Col";

export default function AboutUs({
  className,
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <Grid
      className={`items-center min-h-240 bg-alternative-background shadow-[0_0_0_5px_var(--color-background),0_0_0_15px_var(--color-border)] gap-container-x py-section-y ${className}`}
    >
      <Col sm={6} className="flex justify-center">
        <Image
          alt="Flower Still Life with a Timepiece. Creator: Willem van Aelst. Date: 1663. Institution: Mauritshuis."
          src={"/aboutusimages.webp"}
          width={800}
          height={1200}
          loading="eager"
          className="w-full h-auto max-h-170 max-w-md object-contain"
        />
      </Col>
      <Col sm={6}>
        <div className="flex flex-col gap-12 flex-1 justify-center py-container-y">
          <div>
            <h3 className="text-2xl uppercase text-accent underline">
              Our history
            </h3>
            <h2 className="text-5xl text-accent font-semibold">
              Eight Centuries of{" "}
              <span className="text-secondary">Excellence</span> in Fine Art
            </h2>
          </div>
          <div className="flex flex-col gap-6">
            <p className="text-secondary">
              The Antiqua art shop stands as a premier digital landmark,
              originally established to meet the demands of a portfolio
              examination. Conceived for the "Project: Getting started in Web
              Programming" course, this platform serves as a sophisticated
              showcase of technical skill and curation, bridging the gap between
              historical aesthetics and modern web development.
            </p>
            <p className="text-secondary">
              While the gallery showcases a stunning array of rare items and
              historical masterpieces, all featured works are part of the Public
              Domain and are not available for actual purchase. A comprehensive
              list of these items can be found in the project's README file,
              where all citations and sources are meticulously documented using
              APA 7th style.
            </p>
          </div>
        </div>
      </Col>
    </Grid>
  );
}
