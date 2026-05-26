import { CreateOrderDTO } from "../domain/entities/dtos/createOrderDTO";
import { CreateOrderItemDTO } from "../domain/entities/dtos/createOrderItemDTO";
import { IOrderItemRepository } from "../domain/repositories/IOrderItemRepository";
import { IOrderRepository } from "../domain/repositories/IOrderRepository";

export function createOrderUseCase(
  orderRepository: IOrderRepository,
  orderItemRepository: IOrderItemRepository,
) {
  return async function execute(
    orderData: CreateOrderDTO,
    items: CreateOrderItemDTO[],
  ) {
    const order = await orderRepository.create(orderData);
    await Promise.all(
      items.map((item) =>
        orderItemRepository.create({ ...item, orderId: order.id }),
      ),
    );
    return order;
  };
}
