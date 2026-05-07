export const mockData = [
  {
    image: {
      miniature: "/miniatures/stilllife.webp",
      source: "/images/stilllife.webp",
      alt: "Still life with flowers and fruit by Jan van Huysum",
    },
    title: "Still life with flowers and fruit",
    description: "18th Century canvas by Jan van Huysum",
    badge: "Public Domain",
    slug: "still-life-flowers-fruit",
    price: 1250,
  },
  {
    image: {
      miniature: "/miniatures/cannonshot.webp",
      source: "/images/cannonshot.webp",
      alt: "The cannon shot by L. Bakhuizen",
    },
    title: "The cannon shot",
    description: "17th Century canvas by L. Bakhuizen",
    badge: "Rijksmuseum",
    slug: "the-cannon-shot",
    price: 3400,
  },
  {
    image: {
      miniature: "/miniatures/sailingships.webp",
      source: "/images/sailingships.webp",
      alt: "Ships in the roads by Willem van de Velde the Younger",
    },
    title: "Ships in the roads",
    description: "17th Century canvas by Willem van de Velde",
    badge: "Mauritshuis",
    slug: "ships-in-the-roads",
    price: 2100,
  },
  {
    image: {
      miniature: "/miniatures/arcadianlandscape.webp",
      source: "/images/arcadianlandscape.webp",
      alt: "Arcadian landscape by G. de Lairesse",
    },
    title: "Arcadian landscape",
    description: "18th Century canvas by G. de Lairesse",
    badge: "Rijksmuseum",
    slug: "arcadian-landscape",
    price: 850,
  },
  {
    image: {
      miniature: "/miniatures/yamsterdam.webp",
      source: "/images/yamsterdam.webp",
      alt: "The Y at Amsterdam, with the frigate 'De Ploeg' by L. Bakhuizen",
    },
    title: "The Y at Amsterdam",
    description: "17th Century canvas by L. Bakhuizen",
    badge: "Rijksmuseum",
    slug: "y-at-amsterdam",
    price: 4200,
  },
  {
    image: {
      miniature: "/miniatures/fireboss.webp",
      source: "/images/fireboss.webp",
      alt: "Fire-boss by W. Homer",
    },
    title: "Fire-boss",
    description: "19th Century canvas by W. Homer",
    badge: "National Gallery of Art",
    slug: "fire-boss",
    price: 1750,
  },
  {
    image: {
      miniature: "/miniatures/motherandmary.webp",
      source: "/images/motherandmary.webp",
      alt: "Mother and Mary by T. Eakins",
    },
    title: "Mother and Mary",
    description: "19th Century drawing by T. Eakins",
    badge: "National Gallery of Art",
    slug: "mother-and-mary",
    price: 950,
  },
  {
    image: {
      miniature: "/miniatures/alliesday.webp",
      source: "/images/alliesday.webp",
      alt: "Allies Day, May 1917 by C. Hassam",
    },
    title: "Allies Day, May 1917",
    description: "20th Century canvas by C. Hassam",
    badge: "National Gallery of Art",
    slug: "allies-day-1917",
    price: 5500,
  },
  {
    image: {
      miniature: "/miniatures/musician.webp",
      source: "/images/musician.webp",
      alt: "Musician drawing by B. Spranger",
    },
    title: "Musician",
    description: "Classical drawing by B. Spranger",
    badge: "National Gallery of Art",
    slug: "musician",
    price: 620,
  },
];

export interface propsType extends React.HTMLAttributes<HTMLDivElement> {
  image?: {
    miniature: string;
    alt: string;
    source: string;
  };
  title: string;
  description: string;
  badge?: string;
  price: number;
  slug: string;
  className?: string;
}

export interface productsArray {
  products: propsType[];
}
