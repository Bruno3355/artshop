"use client";
import { productsArray } from "@/prisma/mockdata";
import CardProduct from "../../molecules/Cards/CardProduct/CardProduct";
import Link from "next/link";

export default function ShopProductsCards({ products }: productsArray) {
  return (
    <div className="py-section-y sm:py-0 grid grid-cols-[repeat(auto-fill,minmax(15rem,1fr))] w-full gap-y-section-y gap-x-container-x justify-items-center">
      {products.map(
        ({ title, description, image, price, badge, slug }, index) => (
          <Link href={`/shop/${slug}`}>
            <CardProduct
              key={index}
              title={title}
              description={description}
              image={image}
              price={price}
              badge={badge}
              slug={slug}
            />
          </Link>
        ),
      )}
    </div>
  );
}
