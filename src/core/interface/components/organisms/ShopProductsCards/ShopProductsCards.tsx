import CardProduct from "../../molecules/Cards/CardProduct";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { searchProducts } from "@/src/core/use_cases/SearchProducts";
import { PrismaProductRepository } from "@/src/core/infrastructure/repositories/PrismaProductRepository";
import { Frown } from "lucide-react";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  searchParams: { q?: string };
}

export default async function ShopProductsCards({
  className,
  searchParams,
}: Props) {
  const query = searchParams.q ?? "";
  const products = await searchProducts(PrismaProductRepository, query);

  return (
    <div
      className={cn(
        "py-section-y sm:py-0 grid grid-cols-[repeat(auto-fill,minmax(15rem,1fr))] w-full gap-y-section-y gap-x-container-x justify-items-center",
        className,
      )}
    >
      {products.length === 0 ? (
        <>
          <p className="col-span-full font-medium">
            No items found matching your criteria.
          </p>
          <Frown className="col-span-full" />
        </>
      ) : (
        <>
          {products.map((product) => (
            <Link
              href={`/shop/${product.slug}`}
              key={product.id}
              className="w-full"
            >
              <CardProduct
                title={product.name}
                description={product.description ?? ""}
                image={{
                  source: product.imageUrl ?? "",
                  miniature: product.miniature ?? "",
                  alt: product.imageAlt ?? "",
                }}
                price={product.price}
                slug={product.name}
              />
            </Link>
          ))}
        </>
      )}
    </div>
  );
}
