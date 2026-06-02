import { prisma } from "@/lib/prisma";
import { IProductRepository } from "../../domain/repositories/IProductRepository";
import { Product } from "../../domain/entities/product";

const mapProduct = (p: any): Product => ({
  id: p.id,
  slug: p.slug,
  name: p.name,
  description: p.description,
  badge: p.badge,
  price: Number(p.price),
  imageUrl: p.imageUrl,
  imageAlt: p.imageAlt,
  miniature: p.miniature,
  origin: p.origin,
  source: p.source,
  type: p.type,
  dimensions: p.dimensions,
  condition: p.condition,
  createdAt: p.createdAt,
  updatedAt: p.updatedAt,
  categoryId: p.categoryId,
  category: { name: p.category },
});

export const PrismaProductRepository: IProductRepository = {
  async findAll(): Promise<Product[]> {
    const results = await prisma.product.findMany({
      orderBy: { createdAt: "desc" },
    });
    return results.map(mapProduct);
  },

  async findBySlug(slug: string): Promise<Product | null> {
    const p = await prisma.product.findUnique({
      where: { slug },
    });
    if (!p) return null;
    return mapProduct(p);
  },

  async findById(id: string): Promise<Product | null> {
    const p = await prisma.product.findUnique({
      where: { id },
    });
    if (!p) return null;
    return mapProduct(p);
  },

  async search(query: string): Promise<Product[]> {
    const results = await prisma.product.findMany({
      where: {
        OR: [
          { name: { contains: query } },
          { description: { contains: query } },
          { origin: { contains: query } },
          { category: { name: { contains: query } } },
          { type: { contains: query } },
          { dimensions: { contains: query } },
          { condition: { contains: query } },
        ],
      },
      include: { category: true },
      orderBy: { createdAt: "desc" },
    });

    return results.map(mapProduct);
  },
};
