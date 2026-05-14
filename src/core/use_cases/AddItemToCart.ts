import { CartItem } from "../domain/entities/cart";

export function addItemToCart(
  items: CartItem[],
  newItem: Omit<CartItem, "quantity">,
): CartItem[] {
  const existing = items.find((i) => i.id === newItem.id);

  if (existing) {
    return items.map((i) =>
      i.id === newItem.id ? { ...i, quantity: i.quantity + 1 } : i,
    );
  }

  return [...items, { ...newItem, quantity: 1 }];
}
