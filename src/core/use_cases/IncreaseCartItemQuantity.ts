import { CartItem } from "../domain/entities/cart";

export function increaseCartItemQuantity(
  items: CartItem[],
  id: string,
): CartItem[] {
  return items.map((i) =>
    i.id === id ? { ...i, quantity: i.quantity + 1 } : i,
  );
}
