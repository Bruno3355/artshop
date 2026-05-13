import { IProductRepository } from "../domain/repositories/IProductRepository";
import { Product } from "../domain/entities/product";

export async function getAllProducts(
  repository: IProductRepository,
): Promise<Product[]> {
  return repository.findAll();
}
