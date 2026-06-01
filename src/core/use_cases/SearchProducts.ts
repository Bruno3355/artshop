import { IProductRepository } from "../domain/repositories/IProductRepository";
import { Product } from "../domain/entities/product";

export async function searchProducts(
  repository: IProductRepository,
  query: string,
): Promise<Product[]> {
  if (!query || query.trim() === "") {
    return repository.findAll();
  }

  return repository.search(query.trim());
}
