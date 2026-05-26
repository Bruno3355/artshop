export interface UpdateOrderDTO {
  customerEmail: string;
  customerName?: string;
  customerPhone?: string | null;
  notes?: string | null;
  shippingAddress?: string;
  total?: number;
}
