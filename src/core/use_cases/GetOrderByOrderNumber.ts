import { IOrderRepository } from "../domain/repositories/IOrderRepository";

export default function GetOrderByOrderNumber(
  orderRepository: IOrderRepository,
) {
  return async function execute(orderNumber: string) {
    const order = await orderRepository.findByOrderNumber(orderNumber);
    if (!order) throw new Error(`Order ${orderNumber} not found`);
    return order;
  };
}
