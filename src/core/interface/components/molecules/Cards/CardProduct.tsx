import { currencyConverter } from "@/lib/currencyConverter";
import { propsType } from "@/prisma/mockdata";

import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function CardProduct({
  image,
  title,
  description,
  price,
  className,
}: propsType) {
  return (
    <Card
      className={`relative min-h-100 w-full pt-0 hover:shadow-sm hover:shadow-ring cursor-pointer ${className}`}
    >
      <div className="absolute inset-0 z-30 aspect-4/3 " />
      <img
        src={image?.miniature ?? "placeholder.webp"}
        alt={image?.alt ?? "Placeholder image"}
        className="relative z-20 aspect-4/3 w-full object-cover brightness-90"
      />
      <div className="flex flex-col flex-1 ">
        <CardHeader>
          <CardTitle className="font-medium">{title}</CardTitle>
          <CardDescription className="line-clamp-2">
            {description}
          </CardDescription>
        </CardHeader>
        <CardFooter className="flex justify-end underline mt-auto">
          {currencyConverter(price)}
        </CardFooter>
      </div>
    </Card>
  );
}
