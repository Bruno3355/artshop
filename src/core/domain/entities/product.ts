export interface Product {
  id: string;
  slug: string;
  name: string;
  description: string | null;
  price: number;
  imageUrl: string | null;
  miniature: string | null;
  origin: string | null;
  createdAt: Date;
  updatedAt: Date;
  categoryId: string;
  category: { name: string };
}
