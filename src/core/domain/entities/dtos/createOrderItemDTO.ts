export interface CreateOrderItemDTO {
  orderId?: string;
  productId: string;
  quantity: number;
  unitPrice: number;
}
