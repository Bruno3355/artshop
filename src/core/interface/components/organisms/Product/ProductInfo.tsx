"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Product } from "@/src/core/domain/entities/product";
import { useCartStore } from "@/src/hooks/useCartStore";
import { currencyConverter } from "@/lib/currencyConverter";
import { toast } from "sonner";

interface Props {
  product: Product;
}

export default function ProductInfo({ product }: Props) {
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      slug: product.slug,
      name: product.name,
      price: product.price,
      imageUrl: product.imageUrl,
      miniature: product.miniature,
    });
    toast.success("Product added to cart!", {
      description:
        "You can click in the Cart button to checkout or keep searching other items.",
      duration: 5000,
    });
  };

  return (
    <div className="w-full h-full flex flex-col justify-between gap-container-y px-container-x">
      <div className="flex flex-col gap-container-y">
        {product?.badge && <Badge>{product.badge}</Badge>}
        <div className="py-container-y">
          <h1 className="text-display-md">{product.name}</h1>
          <h2 className="text-muted-foreground capitalize">{product.type}</h2>
        </div>
        <p className="text-justify">{product.description}</p>
      </div>
      <div className="flex flex-col gap-container-y">
        <Card className="py-section-y">
          <CardContent className="self-center text-display-md font-medium">
            {currencyConverter(product.price)}
          </CardContent>
        </Card>
        <Button fullWidth onClick={handleAddToCart}>
          Add to cart
        </Button>
      </div>
    </div>
  );
}
