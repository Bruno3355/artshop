import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import ButtonCart from "../../atoms/Buttons/ButtonCart";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function Cart() {
  return (
    <Sheet>
      <SheetTrigger render={<ButtonCart />}></SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className={"text-display-sm font-bold tracking-wide"}>
            Cart
          </SheetTitle>
          <SheetDescription>
            The selected items for checkout are displayed below:
          </SheetDescription>
          <Separator />
        </SheetHeader>
        <div className="grid flex-1 auto-rows-min gap-6 px-4">
          <p>Item 1</p>
          <p>Item 2</p>
          <p>Item 3</p>
        </div>
        <SheetFooter>
          <Button fullWidth type="submit">
            Go to checkout
          </Button>
          <SheetClose render={<Button variant={"outline"} />}>Close</SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
