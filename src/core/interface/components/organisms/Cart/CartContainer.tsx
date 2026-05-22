"use client";
import { useEffect, useState } from "react";

import {
  Sheet,
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
import { currencyConverter } from "@/lib/currencyConverter";
import Link from "next/link";

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
          {isMounted ? <CardCartItem items={items} /> : <CartSkeleton />}
        </div>
        <SheetFooter className="flex flex-col gap-y-container-y ">
          <div className="text-body-lg flex justify-between border-2 rounded-md border-ring py-container-y px-container-x">
            <span className="underline font-medium">Cart total:</span>
            {currencyConverter(total)}
          </div>
          <div>
            <Link href={"/api/checkout-access"}>
              <Button fullWidth>View cart</Button>
            </Link>
            <Button className="w-full" variant={"outline"} onClick={clearCart}>
              Clear cart
            </Button>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
