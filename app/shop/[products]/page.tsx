import { mockData } from "@/prisma/mockdata";
import Image from "next/image";
import { notFound } from "next/navigation";
import { BreadcrumbBasic } from "@/src/core/interface/components/atoms/BreadcrumbComponent";
import ProductInfo from "@/src/core/interface/components/organisms/Product/ProductInfo";
import { Separator } from "@/components/ui/separator";
import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Newsletter from "@/src/core/interface/components/organisms/Newsletter/Newsletter";

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
      <div className="grid grid-cols-12 relative w-full ">
        <div className="col-span-12 md:col-span-4 py-container-y-lg md:py-0 grid place-items-center gap-container-y">
          <div className="p-2 border-2 bg-muted-foreground">
            <Image
              src={product.image!.source}
              alt={product.image.alt}
              width={600}
              height={800}
              className="w-full max-w-lg h-auto"
            />
          </div>
        </div>

        <div className="col-span-12 md:col-span-8">
          <ProductInfo />
        </div>

        <div className="col-span-12 md:col-span-4 w-full ">
          <div className="rounded-t-md bg-muted border px-container-x py-container-y-sm mt-section-y md:my-container-y gap-container-y flex flex-col">
            <div className="font-medium underline">Attachments</div>
            <Separator />
            <div>Files go here</div>
          </div>

          <div className="rounded-b-md bg-muted border flex justify-between items-center my-container-y px-container-x py-container-y-sm">
            <span className="font-medium">Need help?</span>
            <Button
              variant={"outline"}
              className="hover:bg-accent hover:text-accent-foreground"
            >
              Contact us
            </Button>
          </div>
        </div>
      </div>
      <Newsletter className="pt-section-y" />
    </div>
  );
}
