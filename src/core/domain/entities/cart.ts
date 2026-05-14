export interface CartItem {
  id: string;
  slug: string;
  name: string;
  price: number;
  imageUrl: string | null;
  miniature: string | null;
  quantity: number;
}

export interface Cart {
  items: CartItem[];
  total: number;
}
