import { CreateOrderDTO } from "../entities/dtos/createOrderDTO";
import { UpdateOrderDTO } from "../entities/dtos/updateOrderDTO";
import { Order } from "../entities/order";

export interface IOrderRepository {
  findAll(): Promise<Order[]>;
  findById(id: string): Promise<Order | null>;
  create(data: CreateOrderDTO): Promise<Order>;
  update(id: string, data: UpdateOrderDTO): Promise<Order>;
  delete(id: string): Promise<void>;
}
