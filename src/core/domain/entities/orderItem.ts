import { Decimal } from "@prisma/client/runtime/index-browser";

export interface OrderItem {
  id: string;
  orderId: string;
  productId: string;
  quantity: number;
  unitPrice: Decimal;
  product?: {
    name: string;
    miniature: string | null;
  };
}
