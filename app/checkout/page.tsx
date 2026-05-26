"use client";
import { currencyConverter } from "@/lib/currencyConverter";
import CardCartItem from "@/src/core/interface/components/molecules/Cards/CardCartItem";
import CartSkeleton from "@/src/core/interface/components/organisms/Cart/CartSkeleton";
import { useCartStore } from "@/src/hooks/useCartStore";
import { useEffect, useState } from "react";
import { CustomerInformationForm } from "./CustomerInformationForm";
import { Separator } from "@/components/ui/separator";

export default function Checkout() {
  const [isMounted, setIsMounted] = useState(false);
  const items = useCartStore((state) => state.items);
  const total = useCartStore((state) => state.total);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="pb-section-y px-section-x flex flex-col">
      <div className="pt-section-y">
        <h1 className="text-display-md">Checkout</h1>
        <h2>Check below the items in your cart:</h2>
      </div>
      <Separator className="mt-container-y mb-section-y" />
      <div className="flex w-full gap-container-x-lg">
        <div className="flex-2">
          <CustomerInformationForm />
        </div>

        <div className="flex-1">
          {isMounted ? (
            <>
              <CardCartItem items={items} />
              <div className="text-body-lg flex justify-between border-2 rounded-md border-ring my-container-y py-container-y px-container-x">
                <span className="underline font-medium">Cart total:</span>
                {currencyConverter(total)}
              </div>
            </>
          ) : (
            <CartSkeleton />
          )}
        </div>
      </div>
    </div>
  );
}
