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
      categoryId: publicDomain.id,
    },
    {
      slug: "the-cannon-shot",
      name: "The cannon shot",
      description: "17th Century canvas by L. Bakhuizen",
      price: 3400,
      imageUrl: "/images/cannonshot.webp",
      miniature: "/miniatures/cannonshot.webp",
      categoryId: rijksmuseum.id,
    },
    {
      slug: "ships-in-the-roads",
      name: "Ships in the roads",
      description: "17th Century canvas by Willem van de Velde",
      price: 2100,
      imageUrl: "/images/sailingships.webp",
      miniature: "/miniatures/sailingships.webp",
      categoryId: mauritshuis.id,
    },
    {
      slug: "arcadian-landscape",
      name: "Arcadian landscape",
      description: "18th Century canvas by G. de Lairesse",
      price: 850,
      imageUrl: "/images/arcadianlandscape.webp",
      miniature: "/miniatures/arcadianlandscape.webp",
      categoryId: rijksmuseum.id,
    },
    {
      slug: "y-at-amsterdam",
      name: "The Y at Amsterdam",
      description: "17th Century canvas by L. Bakhuizen",
      price: 4200,
      imageUrl: "/images/yamsterdam.webp",
      miniature: "/miniatures/yamsterdam.webp",
      categoryId: rijksmuseum.id,
    },
    {
      slug: "fire-boss",
      name: "Fire-boss",
      description: "19th Century canvas by W. Homer",
      price: 1750,
      imageUrl: "/images/fireboss.webp",
      miniature: "/miniatures/fireboss.webp",
      categoryId: nationalGallery.id,
    },
    {
      slug: "mother-and-mary",
      name: "Mother and Mary",
      description: "19th Century drawing by T. Eakins",
      price: 950,
      imageUrl: "/images/motherandmary.webp",
      miniature: "/miniatures/motherandmary.webp",
      categoryId: nationalGallery.id,
    },
    {
      slug: "allies-day-1917",
      name: "Allies Day, May 1917",
      description: "20th Century canvas by C. Hassam",
      price: 5500,
      imageUrl: "/images/alliesday.webp",
      miniature: "/miniatures/alliesday.webp",
      categoryId: nationalGallery.id,
    },
    {
      slug: "musician",
      name: "Musician",
      description: "Classical drawing by B. Spranger",
      price: 620,
      imageUrl: "/images/musician.webp",
      miniature: "/miniatures/musician.webp",
      categoryId: nationalGallery.id,
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
