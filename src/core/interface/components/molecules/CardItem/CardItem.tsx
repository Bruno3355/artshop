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

interface propsType extends React.HTMLAttributes<HTMLDivElement>{
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
    <Card className="relative rounded-none h-140 min-w-72 w-full pt-0 shadow-[0_0_0_5px_var(--color-background),0_0_0_10px_var(--color-card)] border-0">
      <div className="h-96 relative">
        <div className="absolute h-full inset-0 z-30 aspect-video bg-black/35" />
        <img
          src={image?.source ?? "https://avatar.vercel.sh/shadcn1"}
          alt={image?.alt ?? "Event cover"}
          className="relative z-20 aspect-video w-full h-full object-cover brightness-60 grayscale dark:brightness-40"
        />
      </div>
      <CardHeader>
        <CardAction>
          {badge && <Badge variant="default">Featured</Badge>}
        </CardAction>
        <CardTitle className="text-sm font-bold tracking-wide uppercase">
          Design systems meetup
        </CardTitle>
        <CardDescription className="">
          A practical talk on component APIs, accessibility, and shipping
          faster.
        </CardDescription>
      </CardHeader>
      <CardFooter className="justify-center">
        <Button className="w-full">View Item</Button>
      </CardFooter>
    </Card>
  );
}
