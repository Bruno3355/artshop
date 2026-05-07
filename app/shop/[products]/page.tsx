import { mockData } from "@/prisma/mockdata";
import Image from "next/image";
import { notFound } from "next/navigation";
import { BreadcrumbBasic } from "@/src/core/interface/components/atoms/BreadcrumbComponent";
import ProductInfo from "@/src/core/interface/components/organisms/Product/ProductInfo";
import { Separator } from "@/components/ui/separator";

type ProductPageProps = {
  params: Promise<{ products: string }>;
};

export default async function ProductPage({ params }: ProductPageProps) {
  const { products } = await params;
  const product = mockData.find((p) => p.slug === products);

  if (!product) notFound();

  return (
    <div key={product.slug} className="px-section-x py-section-y">
      <BreadcrumbBasic
        currentPage={product.title}
        items={[
          { href: "/home", label: "Home" },
          { href: "/shop", label: "Shop" },
        ]}
      />
      <Separator className="my-container-y" />
      <div className="grid grid-cols-12 relative w-full">
        <div className="col-span-4 relative h-150">
          <Image src={product.image!.source} alt={product.image.alt} fill />
        </div>
        <div className="col-span-8">
          <ProductInfo />
        </div>
      </div>
    </div>
  );
}
