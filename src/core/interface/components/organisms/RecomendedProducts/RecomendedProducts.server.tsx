import { PrismaProductRepository } from "@/src/core/infrastructure/repositories/PrismaProductRepository";
import { getAllProducts } from "@/src/core/use_cases/GetAllProducts";
import RecomendedProductsClient from "./RecomendedProducts.client";

export default async function RecomendedProducts({
  className,
}: React.HtmlHTMLAttributes<HTMLDivElement>) {
  const products = await getAllProducts(PrismaProductRepository);

  return <RecomendedProductsClient products={products} className={className} />;
}
