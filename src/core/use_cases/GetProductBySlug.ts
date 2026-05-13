import { IProductRepository } from "../domain/repositories/IProductRepository";
import { Product } from "../domain/entities/product";

export async function getProductBySlug(
  repository: IProductRepository,
  slug: string,
): Promise<Product | null> {
  return repository.findBySlug(slug);
}
