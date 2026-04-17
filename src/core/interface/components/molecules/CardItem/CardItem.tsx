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

interface propsType extends React.HTMLAttributes<HTMLDivElement> {
  image?: {
    source: string;
    alt: string;
  };
  title: string;
  description: string;
  badge?: string;
  className?: string;
}

export function CardItem(props: propsType) {
  const { image, title, description, badge } = props;

  return (
    <Card className="relative flex flex-col rounded-none h-146 min-w-72 w-full pt-0 shadow-[0_0_0_5px_var(--color-background),0_0_0_10px_var(--color-card)] border-0 hover:shadow-[0_0_0_5px_var(--color-background),0_0_20px_3px_var(--color-ring)]">
      <div className="h-96 shrink-0 relative overflow-hidden">
        <div className="absolute h-full inset-0 z-30 bg-black/15" />
        <img
          src={image?.source ?? "https://avatar.vercel.sh/shadcn1"}
          alt={image?.alt ?? "Event cover"}
          className="relative z-20 w-full h-full object-cover"
        />
      </div>

      <div className="flex flex-col justify-around h-full">
        <CardHeader className="flex flex-col h-full items-center justify-between pb-1">
          <CardAction className=" flex w-full justify-end">
            {badge && <Badge variant="default">{badge}</Badge>}
          </CardAction>

          <div className="w-full flex flex-col items-center">
            <CardTitle className="text-base font-extrabold tracking-wide uppercase">
              {title}
            </CardTitle>
            <CardDescription className="line-clamp-2 col-span-2">
              {description}
            </CardDescription>
          </div>

          <div className="h-1 w-1/2 border-2 bg-alternative-background"></div>
        </CardHeader>

        <CardFooter className="justify-center mt-auto">
          <Button className="w-full">View Item</Button>
        </CardFooter>
      </div>
    </Card>
  );
}
