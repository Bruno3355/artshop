import { prisma } from "@/lib/prisma";

async function main() {
  const publicDomain = await prisma.category.upsert({
    where: { name: "Public Domain" },
    update: {},
    create: { name: "Public Domain" },
  });

  const rijksmuseum = await prisma.category.upsert({
    where: { name: "Rijksmuseum" },
    update: {},
    create: { name: "Rijksmuseum" },
  });

  const mauritshuis = await prisma.category.upsert({
    where: { name: "Mauritshuis" },
    update: {},
    create: { name: "Mauritshuis" },
  });

  const nationalGallery = await prisma.category.upsert({
    where: { name: "National Gallery of Art" },
    update: {},
    create: { name: "National Gallery of Art" },
  });

  const products = [
    {
      slug: "still-life-flowers-fruit",
      name: "Still life with flowers and fruit",
      description: "18th Century canvas by Jan van Huysum",
      price: 1250,
      imageUrl: "/images/stilllife.webp",
      miniature: "/miniatures/stilllife.webp",
      imageAlt: "Floral still life with fruit by Jan van Huysum",
      categoryId: publicDomain.id,
      type: "paintings",
      dimensions: "large",
      condition: "professionally-restored",
    },
    {
      slug: "the-cannon-shot",
      name: "The cannon shot",
      description: "17th Century canvas by L. Bakhuizen",
      price: 3400,
      imageUrl: "/images/cannonshot.webp",
      miniature: "/miniatures/cannonshot.webp",
      imageAlt: "Naval battle scene with cannon fire by Bakhuizen",
      categoryId: rijksmuseum.id,
      type: "paintings",
      dimensions: "medium",
      condition: "gently-aged",
    },
    {
      slug: "ships-in-the-roads",
      name: "Ships in the roads",
      description: "17th Century canvas by Willem van de Velde",
      price: 2100,
      imageUrl: "/images/sailingships.webp",
      miniature: "/miniatures/sailingships.webp",
      imageAlt: "Dutch sailing ships at anchor by van de Velde",
      categoryId: mauritshuis.id,
      type: "paintings",
      dimensions: "large",
      condition: "pristine",
    },
    {
      slug: "arcadian-landscape",
      name: "Arcadian landscape",
      description: "18th Century canvas by G. de Lairesse",
      price: 850,
      imageUrl: "/images/arcadianlandscape.webp",
      miniature: "/miniatures/arcadianlandscape.webp",
      imageAlt: "Classical pastoral landscape by de Lairesse",
      categoryId: rijksmuseum.id,
      type: "paintings",
      dimensions: "small",
      condition: "gently-aged",
    },
    {
      slug: "y-at-amsterdam",
      name: "The Y at Amsterdam",
      description: "17th Century canvas by L. Bakhuizen",
      price: 4200,
      imageUrl: "/images/yamsterdam.webp",
      miniature: "/miniatures/yamsterdam.webp",
      imageAlt: "Amsterdam harbour with frigate by Bakhuizen",
      categoryId: rijksmuseum.id,
      type: "paintings",
      dimensions: "large",
      condition: "professionally-restored",
    },
    {
      slug: "fire-boss",
      name: "Fire-boss",
      description: "19th Century canvas by W. Homer",
      price: 1750,
      imageUrl: "/images/fireboss.webp",
      miniature: "/miniatures/fireboss.webp",
      imageAlt: "Mining fire-boss worker by Winslow Homer",
      categoryId: nationalGallery.id,
      type: "paintings",
      dimensions: "medium",
      condition: "pristine",
    },
    {
      slug: "mother-and-mary",
      name: "Mother and Mary",
      description: "19th Century drawing by T. Eakins",
      price: 950,
      imageUrl: "/images/motherandmary.webp",
      miniature: "/miniatures/motherandmary.webp",
      imageAlt: "Portrait of two women by Thomas Eakins",
      categoryId: nationalGallery.id,
      type: "paintings",
      dimensions: "small",
      condition: "professionally-restored",
    },
    {
      slug: "allies-day-1917",
      name: "Allies Day, May 1917",
      description: "20th Century canvas by C. Hassam",
      price: 5500,
      imageUrl: "/images/alliesday.webp",
      miniature: "/miniatures/alliesday.webp",
      imageAlt: "Allied flags on Fifth Avenue by Childe Hassam",
      categoryId: nationalGallery.id,
      type: "paintings",
      dimensions: "large",
      condition: "gently-aged",
    },
    {
      slug: "musician",
      name: "Musician",
      description: "Classical drawing by B. Spranger",
      price: 620,
      imageUrl: "/images/musician.webp",
      miniature: "/miniatures/musician.webp",
      imageAlt: "Classical musician figure drawing by Spranger",
      categoryId: nationalGallery.id,
      type: "paintings",
      dimensions: "medium",
      condition: "pristine",
    },
  ];

  for (const product of products) {
    await prisma.product.upsert({
      where: { slug: product.slug },
      update: product,
      create: product,
    });
  }

  console.log("Success!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
