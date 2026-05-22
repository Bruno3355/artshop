"use client";
import { Product } from "@/src/core/domain/entities/product";
import CardProduct from "../../molecules/Cards/CardProduct";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  products: Product[];
}

export default function ShopProductsCards({ products, className }: Props) {
  return (
    <div
      className={cn(
        "py-section-y sm:py-0 grid grid-cols-[repeat(auto-fill,minmax(15rem,1fr))] w-full gap-y-section-y gap-x-container-x justify-items-center",
        className,
      )}
    >
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
    </div>
  );
}
