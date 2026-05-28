"use client";

import { useEffect } from "react";
import { useCartStore } from "@/src/hooks/useCartStore";

export default function ClearCartOnMount() {
  const clearCart = useCartStore((state) => state.clearCart);

  useEffect(() => {
    clearCart();
  }, []);

  return null;
}
