"use client";
import { useEffect, useState } from "react";
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
import CartSkeleton from "./CartSkeleton";
import CardCartItem from "../../molecules/Cards/CardCartItem";
import { useCartStore } from "@/src/hooks/useCartStore";

export default function Cart() {
  const [isMounted, setIsMounted] = useState(false);
  const total = useCartStore((state) => state.total);
  const items = useCartStore((state) => state.items);
  const clearCart = useCartStore((state) => state.clearCart);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <ButtonCart />
      </SheetTrigger>
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
        <div className={"mx-container-x"}>
          {isMounted ? (
            <CardCartItem items={items} total={total} />
          ) : (
            <CartSkeleton />
          )}
        </div>
        <button onClick={() => console.log(items)}> Click me </button>
        <SheetFooter>
          <Button fullWidth type="submit">
            Go to checkout
          </Button>
          <SheetClose asChild>
            <Button className="w-full" variant={"outline"} onClick={clearCart}>
              Clear cart
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
