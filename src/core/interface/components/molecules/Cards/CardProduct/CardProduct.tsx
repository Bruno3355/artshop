import { currencyConverter } from "@/lib/currencyConverter";
import { propsType } from "@/prisma/mockdata";

import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function CardProduct(data: propsType) {
  const { image, title, description, price } = data;

  return (
    <Card className="relative mx-auto min-h-70 w-full max-w-72 pt-0 hover:shadow-sm hover:shadow-ring cursor-pointer">
      <div className="absolute inset-0 z-30 aspect-4/3 " />
      <img
        src={image?.miniature ?? "placeholder.webp"}
        alt={image?.alt ?? "Placeholder image"}
        className="relative z-20 aspect-4/3 w-full object-cover brightness-90"
      />
      <CardHeader>
        <CardTitle className="font-medium">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardFooter className="flex justify-end underline">
        {currencyConverter(price)}
      </CardFooter>
    </Card>
  );
}
