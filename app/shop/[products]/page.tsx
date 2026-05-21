import { PrismaProductRepository } from "@/src/core/infrastructure/repositories/PrismaProductRepository";
import { getAllProducts } from "@/src/core/use_cases/GetAllProducts";
import Image from "next/image";
import { notFound } from "next/navigation";
import { BreadcrumbBasic } from "@/src/core/interface/components/atoms/BreadcrumbComponent";
import ProductInfo from "@/src/core/interface/components/organisms/Product/ProductInfo";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import Newsletter from "@/src/core/interface/components/organisms/Newsletter/Newsletter";
import ProductAttachments from "@/src/core/interface/components/organisms/Product/ProductAttachments";

type ProductPageProps = {
  params: Promise<{ products: string }>;
};

export default async function ProductPage({ params }: ProductPageProps) {
  const { products } = await params;
  const allProducts = await getAllProducts(PrismaProductRepository);
  const product = allProducts.find((p) => p.slug === products);

  if (!product) notFound();

  return (
    <div key={product.slug} className="px-section-x py-section-y">
      <BreadcrumbBasic
        currentPage={product.name}
        items={[
          { href: "/home", label: "Home" },
          { href: "/shop", label: "Shop" },
        ]}
      />
      <Separator className="my-container-y" />
      <div className="grid grid-cols-12 relative w-full justify-center items-end">
        <div className="col-span-12 md:col-span-4 py-container-y-lg md:py-0 grid gap-container-y h-full content-around justify-center">
          <Image
            src={product.imageUrl ?? ""}
            alt={product.imageAlt ?? ""}
            width={600}
            height={800}
            className="w-full max-w-lg h-auto p-2 border-2 bg-muted-foreground"
          />
          <ProductAttachments className="hidden md:block" />
        </div>

        <div className="col-span-12 md:col-span-8 h-full">
          <ProductInfo product={product} />
        </div>

        <div className="col-span-12 md:col-span-4 w-full "></div>
      </div>
      <ProductAttachments className="block md:hidden" />

      <Newsletter className="pt-section-y" />
    </div>
  );
}
