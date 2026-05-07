import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function ProductInfo() {
  return (
    <div className="w-full h-full flex flex-col justify-between gap-container-y px-container-x">
      <div className="flex flex-col gap-container-y">
        {/* Add a conditional to when a badge do not exist */}
        <Badge>Item badge</Badge>{" "}
        <div className="py-container-y">
          <h1 className="text-display-md">Item title</h1>
          <h2 className="text-muted-foreground">Subtitle</h2>
        </div>
        <p>
          Description - Lorem ipsum dolor, sit amet consectetur adipisicing
          elit. Inventore quam voluptatum distinctio repudiandae quis
          necessitatibus eaque incidunt voluptas possimus, expedita excepturi
          placeat sapiente repellat ea tempora consequatur porro beatae!
          Tempora.
        </p>
      </div>

      <div className="flex flex-col gap-container-y">
        <Card className="py-section-y">
          <CardContent className="self-center text-display-sm font-medium">
            Product Value
          </CardContent>
        </Card>
        <Button fullWidth>Add to cart</Button>
      </div>
    </div>
  );
}
