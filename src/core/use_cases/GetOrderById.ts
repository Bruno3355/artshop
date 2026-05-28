import { IOrderRepository } from "../domain/repositories/IOrderRepository";

export default function getOrderById(orderRepository: IOrderRepository) {
  return async function execute(id: string) {
    const order = await orderRepository.findById(id);
    if (!order) throw new Error(`Order ${id} not found`);
    return order;
  };
}
