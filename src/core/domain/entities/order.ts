import { Decimal } from "@prisma/client/runtime/index-browser";
import { OrderItem } from "./orderItem";

export interface Order {
  id: string;
  createdAt: Date;
  orderNumber: string;
  customerEmail: string;
  customerName: string;
  customerPhone: string | null;
  notes: string | null;
  shippingAddress: string;
  total: Decimal;
  updatedAt: Date;
  items: OrderItem[];
}
