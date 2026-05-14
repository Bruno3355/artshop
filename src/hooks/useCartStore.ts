// Zustand Cart management

import { create } from "zustand";
import { persist } from "zustand/middleware";
import { CartItem } from "../core/domain/entities/cart";
import { addItemToCart } from "../core/use_cases/AddItemToCart";
import { removeItemFromCart } from "../core/use_cases/RemoveItemFromCart";
import { increaseCartItemQuantity } from "../core/use_cases/IncreaseCartItemQuantity";
import { decreaseCartItemQuantity } from "../core/use_cases/DecreaseCartItemQuantity";
import { clearCart } from "../core/use_cases/ClearCart";
import { calculateCartTotal } from "../core/use_cases/CalculateCartTotal";

interface CartStore {
  items: CartItem[];
  total: number;
  addItem: (item: Omit<CartItem, "quantity">) => void;
  removeItem: (id: string) => void;
  increaseQuantity: (id: string) => void;
  decreaseQuantity: (id: string) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      total: 0,

      addItem: (newItem) => {
        const updatedItems = addItemToCart(get().items, newItem);
        set({ items: updatedItems, total: calculateCartTotal(updatedItems) });
      },

      removeItem: (id) => {
        const updatedItems = removeItemFromCart(get().items, id);
        set({ items: updatedItems, total: calculateCartTotal(updatedItems) });
      },

      increaseQuantity: (id) => {
        const updatedItems = increaseCartItemQuantity(get().items, id);
        set({ items: updatedItems, total: calculateCartTotal(updatedItems) });
      },

      decreaseQuantity: (id) => {
        const updatedItems = decreaseCartItemQuantity(get().items, id);
        set({ items: updatedItems, total: calculateCartTotal(updatedItems) });
      },

      clearCart: () => {
        const updatedItems = clearCart(get().items);
        set({ items: updatedItems, total: calculateCartTotal(updatedItems) });
      },
    }),
    { name: "artshop-cart" },
  ),
);
