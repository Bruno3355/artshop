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
      description: `Jan van Huysum's lasting fame centers on his exuberant arrangements and technical virtuosity. More than any other artist before or after, he was able to capture the dynamic energy of a profuse array of flowers and fruit. In this superb and large example, the bouquet fills the entire panel. Flowers overflowing their terra-cotta vase and peaches and grapes spilling over the foreground ledge create a sense of opulent abundance. Woven in and out of the densely packed bouquet of peonies, roses, carnations, and auriculae are the rhythmically flowing stems and blossoms of tulips, veronica, tuberoses, and hops. The artist masterfully integrated insects into his bouquet and suggested the translucence of dewdrops on petals and leaves. He often illuminated blossoms situated at the back of his bouquets and silhouetted darker foreground leaves and tendrils against them.

Van Huysum was reportedly secretive about his technique, and he apparently forbade anyone, including his own brothers, to enter his studio for fear that they would learn how he purified and applied his colors. He spent a portion of each summer in Haarlem, already a major horticultural center in his day, in order to study flowers in bloom. The remarkable similarities in the shapes and character of individual blossoms in different still-life paintings indicate, however, that he also used drawn or painted models to satisfy pictorial demands.

Trained by his father, Justus van Huysum the Elder (1659–1716), Jan derived his compositional ideas and technical prowess from the examples of Jan Davidsz de Heem (1606–1684) and Willem van Aelst (1626–1683). Following De Heem's lead, Jan van Huysum organized his bouquets with sweeping rhythms that draw the eye in circular patterns throughout the composition and included flowers that do not bloom at the same time. Van Aelst's work showed Van Huysum the advantages of massing brightly lit flowers in order to focus the dynamically swirling rhythms underlying his compositions.`,
      badge: null,
      price: 1250,
      imageUrl: "/images/stilllife.webp",
      miniature: "/miniatures/stilllife.webp",
      imageAlt: "Floral still life with fruit by Jan van Huysum",
      source:
        "Van Huysum, J. (ca. 1700–1733). Still life with flowers and fruit [Painting]. Rijksmuseum, Amsterdam, Netherlands. https://www.nga.gov/artworks/96655-still-life-flowers-and-fruit",
      categoryId: publicDomain.id,
      type: "paintings",
      dimensions: "large",
      condition: "professionally-restored",
    },
    {
      slug: "the-cannon-shot",
      name: "The cannon shot",
      description:
        "A Dutch warship in a calm, with its sails loosed, fires a cannon shot. Two sloops float to either side of the man-of-war, and another Dutch ship with lowered sails can be seen in the distance.",
      badge: "Staff Pick",
      price: 3400,
      imageUrl: "/images/cannonshot.webp",
      miniature: "/miniatures/cannonshot.webp",
      imageAlt: "Naval battle scene with cannon fire by Bakhuizen",
      source:
        "Bakhuizen, L. (1680). The cannon shot [Painting]. Rijksmuseum, Amsterdam, Netherlands. https://www.rijksmuseum.nl/en/collection/object/The-Cannon-Shot--0c987a7942d3809625b09d0e175ef1bf",
      categoryId: rijksmuseum.id,
      type: "paintings",
      dimensions: "medium",
      condition: "gently-aged",
    },
    {
      slug: "ships-in-the-roads",
      name: "Ships in the roads",
      description:
        "Willem van de Velde followed in his father's footsteps and specialised in ship painting. Here, he gives an impression of a day on the water in almost dead calm. On the right, the crew of a three-master are hoisting the headsail, while a passenger is being rowed ashore. The activities are being watched from the yacht in the foreground right. The stern of the ship is richly decorated and bears a red Dutch lion and the Amsterdam coat of arms.",
      badge: "Best Seller",
      price: 2100,
      imageUrl: "/images/sailingships.webp",
      miniature: "/miniatures/sailingships.webp",
      imageAlt: "Dutch sailing ships at anchor by van de Velde",
      source:
        "Van de Velde, W., the Younger. (1658). Ships in the roads [Painting]. Mauritshuis, The Hague, Netherlands. https://www.mauritshuis.nl/en/our-collection/artworks/200-ships-in-the-roads",
      categoryId: mauritshuis.id,
      type: "paintings",
      dimensions: "large",
      condition: "pristine",
    },
    {
      slug: "arcadian-landscape",
      name: "Arcadian landscape",
      description:
        "Arcadian Landscape, one of a series of ten murals in the garden room of the main floor of the Amsterdam house Herengracht 524 Publisher: Rijksmuseum Date: 1771 Providing institution: Rijksmuseum Aggregator: Rijksmuseum Providing Country: Netherlands Public Domain Arcadian Landscape, one of a series of ten murals in the garden room of the main floor of the Amsterdam house Herengracht 524 - 1771 - Rijksmuseum, Netherlands - Public Domain.",
      badge: "Great Value",
      price: 850,
      imageUrl: "/images/arcadianlandscape.webp",
      miniature: "/miniatures/arcadianlandscape.webp",
      imageAlt: "Classical pastoral landscape by de Lairesse",
      source:
        "Lairesse, G. de. (1771). Arcadian landscape [Painting]. Rijksmuseum, Amsterdam, Netherlands. https://unsplash.com/photos/people-walking-through-a-lush-sun-dappled-park-landscape-MQ4cKv5d2G0",
      categoryId: rijksmuseum.id,
      type: "paintings",
      dimensions: "small",
      condition: "gently-aged",
    },
    {
      slug: "y-at-amsterdam",
      name: "The Y at Amsterdam",
      description: "17th Century canvas by L. Bakhuizen",
      badge: "Rare Find",
      price: 4200,
      imageUrl: "/images/yamsterdam.webp",
      miniature: "/miniatures/yamsterdam.webp",
      imageAlt: "Amsterdam harbour with frigate by Bakhuizen",
      source:
        "Bakhuizen, L. (17th century). The Y at Amsterdam, with the frigate 'De Ploeg' [Painting]. Rijksmuseum, Amsterdam, Netherlands. https://unsplash.com/photos/a-painting-of-a-group-of-people-standing-on-a-beach-Yn6U8OSyNwg",
      categoryId: rijksmuseum.id,
      type: "paintings",
      dimensions: "large",
      condition: "professionally-restored",
    },
    {
      slug: "fire-boss",
      name: "Fire-boss",
      description: `Painted during a period of labor unrest in 1925, The Fire Boss was intended as a life-size personification of a profession rather than a portrait of a specific individual. Despite his downcast, bedraggled appearance, the miner exudes defiance and inner resolve. George Luks admired miners, and many aspects of the painting indicate that he was familiar with their lifestyle and equipment. The Fire Boss served as the centerpiece of a well-attended exhibition of Luks's work at the Pottsville Free Public Library in October 1925. The event stirred considerable interest in an area where almost half of the local population consisted of miners and their families. The Fire Boss is a compelling image that arouses sympathy and admiration for the American laborer.

Luks was raised in the heart of Pennsylvania's anthracite coal region and spent his youth in the mining town of Shenandoah, in northern Schuylkill County. He later worked at a drugstore in Pottsville before moving to Philadelphia to study at the Pennsylvania Academy of the Fine Arts. Luks's father was a physician who often tended to the needs of the impoverished and striking miners and was sympathetic to their plight. Luks always had an emotional bond with the area and regarded it as his home. In the 1920s the artist made regular summer painting trips to Pottsville, during which he produced many images of life in the mines.`,
      badge: null,
      price: 1750,
      imageUrl: "/images/fireboss.webp",
      miniature: "/miniatures/fireboss.webp",
      imageAlt: "Mining fire-boss worker by George Luks",
      source:
        "Homer, W. (1885). Fire-boss [Painting]. National Gallery of Art, Washington, DC, United States. https://www.nga.gov/artworks/42925-fire-boss",
      categoryId: nationalGallery.id,
      type: "paintings",
      dimensions: "medium",
      condition: "pristine",
    },
    {
      slug: "mother-and-mary",
      name: "Mother and Mary",
      description: "19th Century drawing by T. Eakins",
      badge: "New Arrival",
      price: 950,
      imageUrl: "/images/motherandmary.webp",
      miniature: "/miniatures/motherandmary.webp",
      imageAlt: "Portrait of two women by Thomas Eakins",
      source:
        "Eakins, T. (ca. 1884). Mother and Mary [Drawing]. National Gallery of Art, Washington, DC, United States. https://www.nga.gov/artworks/50713-mother-and-mary",
      categoryId: nationalGallery.id,
      type: "paintings",
      dimensions: "small",
      condition: "professionally-restored",
    },
    {
      slug: "allies-day-1917",
      name: "Allies Day, May 1917",
      description: `This painting commemorates the nation's entry into World War I in spring 1917. Childe Hassam shows Fifth Avenue in New York City decorated with red, white, and blue flags. It had been declared "the Avenue of the Allies" in honor of the military alliance between the United States, Great Britain, and France.
      This is part of a series of flag images in which Hassam used brilliant sunlight and color in the style of the French impressionists. The breezy, celebratory air glosses over the horrors of modern warfare that American soldiers would face fighting in Europe.`,
      badge: "Masterpiece",
      price: 5500,
      imageUrl: "/images/alliesday.webp",
      miniature: "/miniatures/alliesday.webp",
      imageAlt: "Allied flags on Fifth Avenue by Childe Hassam",
      source:
        "Hassam, C. (1917). Allies Day, May 1917 [Painting]. National Gallery of Art, Washington, DC, United States. https://www.nga.gov/artworks/30115-allies-day-may-1917",
      categoryId: nationalGallery.id,
      type: "paintings",
      dimensions: "large",
      condition: "gently-aged",
    },
    {
      slug: "musician",
      name: "Musician",
      description: "Classical drawing by B. Spranger",
      badge: null,
      price: 620,
      imageUrl: "/images/musician.webp",
      miniature: "/miniatures/musician.webp",
      imageAlt: "Classical musician figure drawing by Spranger",
      source:
        "Spranger, B. (n.d.). Musician [Drawing]. National Gallery of Art, Washington, DC, United States. https://www.nga.gov/artworks/46638-musician",
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
