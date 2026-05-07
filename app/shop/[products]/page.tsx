import { mockData } from "@/prisma/mockdata";
import Image from "next/image";
import { notFound } from "next/navigation";

type ProductPageProps = {
  params: Promise<{ products: string }>;
};

export default async function ProductPage({ params }: ProductPageProps) {
  const { products } = await params;
  const product = mockData.find((p) => p.slug === products);

  if (!product) notFound();

  return (
    <div key={product.slug}>
      <h1>{product.title}</h1>
      <Image
        src={product.image!.source}
        alt={product.image.alt}
        width={300}
        height={600}
      />
    </div>
  );
}
