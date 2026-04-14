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
    <Card className="relative flex flex-col rounded-none h-146 min-w-72 w-full pt-0 shadow-[0_0_0_5px_var(--color-background),0_0_0_10px_var(--color-card)] border-0">
      <div className="h-96 shrink-0 relative overflow-hidden">
        <div className="absolute h-full inset-0 z-30 bg-black/15" />
        <img
          src={image?.source ?? "https://avatar.vercel.sh/shadcn1"}
          alt={image?.alt ?? "Event cover"}
          className="relative z-20 w-full h-full object-cover"
        />
      </div>
      <CardHeader>
        <CardAction>
          {badge && <Badge variant="default">{badge}</Badge>}
        </CardAction>
        <CardTitle className="text-sm font-bold tracking-wide uppercase">
          {title}
        </CardTitle>
        <CardDescription className="line-clamp-2">
          {description}
        </CardDescription>
      </CardHeader>
      <CardFooter className="justify-center mt-auto">
        <Button className="w-full">View Item</Button>
      </CardFooter>
    </Card>
  );
}