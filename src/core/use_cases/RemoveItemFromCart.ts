import { CartItem } from "../domain/entities/cart";

export function removeItemFromCart(items: CartItem[], id: string): CartItem[] {
  return items.filter((i) => i.id !== id);
}
