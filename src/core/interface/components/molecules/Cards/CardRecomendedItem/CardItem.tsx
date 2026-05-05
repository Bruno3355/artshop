import { propsType } from "@/prisma/mockdata";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function CardRecomendedItem(props: propsType) {
  const { image, title, description, badge } = props;

  return (
    <Card className="h-full relative flex flex-col rounded-none w-full pt-0 shadow-[0_0_0_5px_var(--color-background),0_0_0_10px_var(--color-card)] border-0 hover:shadow-[0_0_0_5px_var(--color-background),0_0_20px_3px_var(--color-ring)]">
      <div className="h-96 shrink-0 relative overflow-hidden">
        <div className="absolute h-full inset-0 z-30 bg-black/15" />
        <img
          src={image?.miniature ?? "placeholder.webp"}
          alt={image?.alt ?? "Placeholder image"}
          className="relative z-20 w-full h-full object-cover"
        />
      </div>

      <div className="flex flex-col flex-1 justify-around">
        <CardHeader className="flex flex-col flex-1 items-center justify-between pb-1">
          <CardAction className=" flex w-full justify-end">
            {badge && <Badge variant="default">{badge}</Badge>}
          </CardAction>

          <div className="w-full flex flex-col items-center">
            <CardTitle className="text-base font-medium tracking-wide uppercase">
              {title}
            </CardTitle>
            <CardDescription className="line-clamp-2 col-span-2">
              {description}
            </CardDescription>
          </div>

          <div className="h-1 w-1/2 border-2 bg-primary"></div>
        </CardHeader>

        <CardFooter className="justify-center mt-auto">
          <Button className="w-full">View Item</Button>
        </CardFooter>
      </div>
    </Card>
  );
}
