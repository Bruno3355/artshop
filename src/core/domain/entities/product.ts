export interface Product {
  id: string;
  slug: string;
  name: string;
  description: string | null;
  badge: string | null;
  price: number;
  type: string;
  dimensions: string;
  condition: string;
  imageUrl: string | null;
  imageAlt: string | null;
  miniature: string | null;
  origin: string | null;
  createdAt: Date;
  updatedAt: Date;
  categoryId: string;
  category: { name: string };
}
