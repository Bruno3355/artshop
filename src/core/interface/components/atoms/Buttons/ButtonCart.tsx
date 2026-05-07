import { Button } from "@/components/ui/button";
import { ShoppingCartIcon } from "lucide-react";

export default function ButtonCart({
  ref,
  ...props
}: React.ComponentProps<"button">) {
  return (
    <Button ref={ref} variant={"ghost"} {...props}>
      <ShoppingCartIcon strokeWidth={3} />
      Cart
    </Button>
  );
}
