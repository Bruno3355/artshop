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

  const orderUUIDs = [
    "550e8400-e29b-41d4-a716-446655440001",
    "550e8400-e29b-41d4-a716-446655440002",
    "550e8400-e29b-41d4-a716-446655440003",
    "550e8400-e29b-41d4-a716-446655440004",
    "550e8400-e29b-41d4-a716-446655440005",
    "550e8400-e29b-41d4-a716-446655440006",
    "550e8400-e29b-41d4-a716-446655440007",
    "550e8400-e29b-41d4-a716-446655440008",
    "550e8400-e29b-41d4-a716-446655440009",
    "550e8400-e29b-41d4-a716-446655440010",
    "550e8400-e29b-41d4-a716-446655440011",
    "550e8400-e29b-41d4-a716-446655440012",
    "550e8400-e29b-41d4-a716-446655440013",
    "550e8400-e29b-41d4-a716-446655440014",
    "550e8400-e29b-41d4-a716-446655440015",
  ];

  const orders = [
    {
      id: orderUUIDs[0],
      orderNumber: "ORD-2024-001",
      customerName: "Alice Johnson",
      customerEmail: "alice.johnson@email.com",
      customerPhone: "+1 (555) 234-5678",
      shippingAddress: "123 Maple Street, Brooklyn, NY 11201",
      total: 189.99,
      notes: "Please leave at the front door if no one answers.",
    },
    {
      id: orderUUIDs[1],
      orderNumber: "ORD-2024-002",
      customerName: "Bob Martinez",
      customerEmail: "bob.martinez@email.com",
      customerPhone: "+1 (555) 345-6789",
      shippingAddress: "456 Oak Avenue, Los Angeles, CA 90001",
      total: 349.99,
      notes: null,
    },
    {
      id: orderUUIDs[2],
      orderNumber: "ORD-2024-003",
      customerName: "Carol White",
      customerEmail: "carol.white@email.com",
      customerPhone: null,
      shippingAddress: "789 Pine Road, Chicago, IL 60601",
      total: 89.97,
      notes: "Gift wrapping requested.",
    },
    {
      id: orderUUIDs[3],
      orderNumber: "ORD-2024-004",
      customerName: "David Brown",
      customerEmail: "david.brown@email.com",
      customerPhone: "+1 (555) 456-7890",
      shippingAddress: "321 Cedar Lane, Austin, TX 78701",
      total: 499.99,
      notes: "Fragile item — handle with care.",
    },
    {
      id: orderUUIDs[4],
      orderNumber: "ORD-2024-005",
      customerName: "Emma Davis",
      customerEmail: "emma.davis@email.com",
      customerPhone: "+1 (555) 567-8901",
      shippingAddress: "654 Birch Boulevard, Seattle, WA 98101",
      total: 159.98,
      notes: null,
    },
    {
      id: orderUUIDs[5],
      orderNumber: "ORD-2024-006",
      customerName: "Frank Wilson",
      customerEmail: "frank.wilson@email.com",
      customerPhone: null,
      shippingAddress: "987 Elm Street, Miami, FL 33101",
      total: 129.99,
      notes: null,
    },
    {
      id: orderUUIDs[6],
      orderNumber: "ORD-2024-007",
      customerName: "Grace Lee",
      customerEmail: "grace.lee@email.com",
      customerPhone: "+1 (555) 678-9012",
      shippingAddress: "147 Spruce Way, Boston, MA 02101",
      total: 74.96,
      notes: "Birthday present — please include a gift note.",
    },
    {
      id: orderUUIDs[7],
      orderNumber: "ORD-2024-008",
      customerName: "Henry Taylor",
      customerEmail: "henry.taylor@email.com",
      customerPhone: "+1 (555) 789-0123",
      shippingAddress: "258 Walnut Drive, Denver, CO 80201",
      total: 219.99,
      notes: null,
    },
    {
      id: orderUUIDs[8],
      orderNumber: "ORD-2024-009",
      customerName: "Isabelle Anderson",
      customerEmail: "isabelle.anderson@email.com",
      customerPhone: null,
      shippingAddress: "369 Poplar Court, Portland, OR 97201",
      total: 59.98,
      notes: "Leave with neighbor if not home.",
    },
    {
      id: orderUUIDs[9],
      orderNumber: "ORD-2024-010",
      customerName: "James Thomas",
      customerEmail: "james.thomas@email.com",
      customerPhone: "+1 (555) 890-1234",
      shippingAddress: "741 Hickory Place, Nashville, TN 37201",
      total: 599.99,
      notes: "Original painting — requires signature on delivery.",
    },
    {
      id: orderUUIDs[10],
      orderNumber: "ORD-2024-011",
      customerName: "Kate Jackson",
      customerEmail: "kate.jackson@email.com",
      customerPhone: "+1 (555) 901-2345",
      shippingAddress: "852 Magnolia Avenue, Phoenix, AZ 85001",
      total: 134.97,
      notes: null,
    },
    {
      id: orderUUIDs[11],
      orderNumber: "ORD-2024-012",
      customerName: "Liam Harris",
      customerEmail: "liam.harris@email.com",
      customerPhone: null,
      shippingAddress: "963 Chestnut Street, San Francisco, CA 94101",
      total: 279.99,
      notes: "Limited edition — please double box.",
    },
    {
      id: orderUUIDs[12],
      orderNumber: "ORD-2024-013",
      customerName: "Mia Clark",
      customerEmail: "mia.clark@email.com",
      customerPhone: "+1 (555) 012-3456",
      shippingAddress: "159 Willow Lane, Philadelphia, PA 19101",
      total: 149.98,
      notes: null,
    },
    {
      id: orderUUIDs[13],
      orderNumber: "ORD-2024-014",
      customerName: "Noah Lewis",
      customerEmail: "noah.lewis@email.com",
      customerPhone: "+1 (555) 123-4560",
      shippingAddress: "357 Aspen Circle, Minneapolis, MN 55401",
      total: 389.99,
      notes: "Please use eco-friendly packaging if possible.",
    },
    {
      id: orderUUIDs[14],
      orderNumber: "ORD-2024-015",
      customerName: "Olivia Walker",
      customerEmail: "olivia.walker@email.com",
      customerPhone: "+1 (555) 234-5670",
      shippingAddress: "486 Sycamore Road, Atlanta, GA 30301",
      total: 24.95,
      notes: null,
    },
  ];

  const orderItemUUIDs = [
    "660e8400-e29b-41d4-a716-446655440001",
    "660e8400-e29b-41d4-a716-446655440002",
    "660e8400-e29b-41d4-a716-446655440003",
    "660e8400-e29b-41d4-a716-446655440004",
    "660e8400-e29b-41d4-a716-446655440005",
    "660e8400-e29b-41d4-a716-446655440006",
    "660e8400-e29b-41d4-a716-446655440007",
    "660e8400-e29b-41d4-a716-446655440008",
    "660e8400-e29b-41d4-a716-446655440009",
    "660e8400-e29b-41d4-a716-446655440010",
    "660e8400-e29b-41d4-a716-446655440011",
    "660e8400-e29b-41d4-a716-446655440012",
    "660e8400-e29b-41d4-a716-446655440013",
    "660e8400-e29b-41d4-a716-446655440014",
    "660e8400-e29b-41d4-a716-446655440015",
  ];

  const orderItems = [
    {
      id: orderItemUUIDs[0],
      quantity: 1,
      unitPrice: 189.99,
      orderId: orderUUIDs[0],
    },
    {
      id: orderItemUUIDs[1],
      quantity: 1,
      unitPrice: 349.99,
      orderId: orderUUIDs[1],
    },
    {
      id: orderItemUUIDs[2],
      quantity: 3,
      unitPrice: 29.99,
      orderId: orderUUIDs[2],
    },
    {
      id: orderItemUUIDs[3],
      quantity: 1,
      unitPrice: 499.99,
      orderId: orderUUIDs[3],
    },
    {
      id: orderItemUUIDs[4],
      quantity: 2,
      unitPrice: 79.99,
      orderId: orderUUIDs[4],
    },
    {
      id: orderItemUUIDs[5],
      quantity: 1,
      unitPrice: 129.99,
      orderId: orderUUIDs[5],
    },
    {
      id: orderItemUUIDs[6],
      quantity: 4,
      unitPrice: 18.74,
      orderId: orderUUIDs[6],
    },
    {
      id: orderItemUUIDs[7],
      quantity: 1,
      unitPrice: 219.99,
      orderId: orderUUIDs[7],
    },
    {
      id: orderItemUUIDs[8],
      quantity: 2,
      unitPrice: 29.99,
      orderId: orderUUIDs[8],
    },
    {
      id: orderItemUUIDs[9],
      quantity: 1,
      unitPrice: 599.99,
      orderId: orderUUIDs[9],
    },
    {
      id: orderItemUUIDs[10],
      quantity: 3,
      unitPrice: 44.99,
      orderId: orderUUIDs[10],
    },
    {
      id: orderItemUUIDs[11],
      quantity: 1,
      unitPrice: 279.99,
      orderId: orderUUIDs[11],
    },
    {
      id: orderItemUUIDs[12],
      quantity: 2,
      unitPrice: 74.99,
      orderId: orderUUIDs[12],
    },
    {
      id: orderItemUUIDs[13],
      quantity: 1,
      unitPrice: 389.99,
      orderId: orderUUIDs[13],
    },
    {
      id: orderItemUUIDs[14],
      quantity: 5,
      unitPrice: 4.99,
      orderId: orderUUIDs[14],
    },
  ];

  const contactMessages = [
    {
      name: "Sarah Mitchell",
      email: "sarah.mitchell@email.com",
      subject: "Custom commission inquiry",
      message:
        "Hello! I was wondering if you offer custom art commissions. I'm looking for a piece in a 24x36 inch format for my living room wall.",
    },
    {
      name: "Tom Reynolds",
      email: "tom.reynolds@email.com",
      subject: "Damaged item on arrival",
      message:
        "My order ORD-2024-003 arrived with a torn corner on one of the prints. Could you help me with a replacement or refund?",
    },
    {
      name: "Priya Kapoor",
      email: "priya.kapoor@email.com",
      subject: "Question about print materials",
      message:
        "What type of paper do you use for your giclee prints? I'm concerned about long-term color fastness for a piece I'm considering buying.",
    },
    {
      name: "Marcus Greene",
      email: "marcus.greene@email.com",
      subject: null,
      message:
        "Just wanted to say the watercolor print I received last week is absolutely stunning. The colors are even more vibrant in person. Will definitely order again!",
    },
    {
      name: "Laura Simmons",
      email: "laura.simmons@email.com",
      subject: "Return request",
      message:
        "I received the wrong item in my order. I ordered the abstract blue series print but got the red landscape instead. How do I initiate a return?",
    },
    {
      name: "Chris Nakamura",
      email: "chris.nakamura@email.com",
      subject: "Framing options",
      message:
        "Do you offer framing services for your prints? I'd love to get a couple of pieces framed before they are shipped if that's possible.",
    },
    {
      name: "Diana Rossi",
      email: "diana.rossi@email.com",
      subject: "Bulk order for office space",
      message:
        "We're redesigning our office and are interested in ordering 20+ prints. Do you offer any corporate or bulk discounts?",
    },
    {
      name: "Ethan Brooks",
      email: "ethan.brooks@email.com",
      subject: "Artist background",
      message:
        "I'm very interested in the 'Golden Hour Series' pieces. Could you tell me more about the artist and their inspiration for this collection?",
    },
    {
      name: "Fatima Al-Hassan",
      email: "fatima.alhassan@email.com",
      subject: "International shipping",
      message:
        "I'm based in the UK. Do you ship internationally and, if so, what are the estimated delivery times and customs fees I should expect?",
    },
    {
      name: "George Petrov",
      email: "george.petrov@email.com",
      subject: "Certificate of authenticity",
      message:
        "I'm interested in one of the original paintings. Does it come with a certificate of authenticity and provenance documentation?",
    },
    {
      name: "Hannah Schmidt",
      email: "hannah.schmidt@email.com",
      subject: "Payment methods",
      message:
        "Do you accept PayPal or bank transfers as payment methods? I'd prefer not to use a credit card for this purchase.",
    },
    {
      name: "Ivan Sousa",
      email: "ivan.sousa@email.com",
      subject: "Wholesale partnership",
      message:
        "I run a small gallery and I'm interested in discussing a wholesale partnership. Could you share information about your wholesale pricing and terms?",
    },
    {
      name: "Julia Fernandez",
      email: "julia.fernandez@email.com",
      subject: null,
      message:
        "The packaging was incredibly thoughtful and eco-friendly. The print arrived in perfect condition. This kind of attention to detail really makes a difference!",
    },
    {
      name: "Kevin O'Brien",
      email: "kevin.obrien@email.com",
      subject: "Exhibition collaboration",
      message:
        "I'm organizing a local art fair next spring and would love to discuss the possibility of featuring your work. Would you be open to collaborating?",
    },
    {
      name: "Lily Chen",
      email: "lily.chen@email.com",
      subject: "Gift card availability",
      message:
        "Do you sell gift cards? I'd love to give one to a friend who's a big art enthusiast but I'm not sure which specific print she'd prefer.",
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

  for (const { id, ...data } of orders) {
    await prisma.order.upsert({
      where: { orderNumber: data.orderNumber },
      update: data,
      create: { id, ...data },
    });
  }

  const productIds = (
    await prisma.product.findMany({ select: { id: true } })
  ).map((p) => p.id);

  for (let i = 0; i < orderItems.length; i++) {
    const { id, ...data } = orderItems[i];
    const itemWithProduct = {
      ...data,
      productId: productIds[i % productIds.length],
    };
    await prisma.orderItem.upsert({
      where: { id },
      update: itemWithProduct,
      create: { id, ...itemWithProduct },
    });
  }

  const existingMessages = await prisma.contactMessage.count();
  if (existingMessages === 0) {
    await prisma.contactMessage.createMany({ data: contactMessages });
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
