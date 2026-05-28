import { IProductRepository } from "../domain/repositories/IProductRepository";
import { Product } from "../domain/entities/product";

export async function getProductById(
  repository: IProductRepository,
  id: string,
): Promise<Product | null> {
  return repository.findById(id);
}
