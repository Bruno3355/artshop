export interface CreateOrderDTO {
  orderNumber: string;
  customerEmail: string;
  customerName: string;
  customerPhone?: string | null;
  notes?: string | null;
  shippingAddress: string;
  total: number;
}
