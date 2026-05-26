import { CreateOrderItemDTO } from "../entities/dtos/createOrderItemDTO";
import { OrderItem } from "../entities/orderItem";

type CreateOrderItemInput = Required<CreateOrderItemDTO>;

export interface IOrderItemRepository {
  findAll(): Promise<OrderItem[]>;
  findById(id: string): Promise<OrderItem | null>;
  findByOrderId(orderId: string): Promise<OrderItem[]>;
  create(data: CreateOrderItemInput): Promise<OrderItem>;
  delete(id: string): Promise<void>;
}
