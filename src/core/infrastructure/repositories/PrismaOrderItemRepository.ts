import { prisma } from "@/lib/prisma";
import { IOrderItemRepository } from "../../domain/repositories/IOrderItemRepository";

export const makeOrderItemRepository = (): IOrderItemRepository => {
  return {
    async create(data) {
      return prisma.orderItem.create({ data });
    },
    async findAll() {
      return prisma.orderItem.findMany();
    },
    async findById(id) {
      return prisma.orderItem.findUnique({ where: { id } });
    },
    async findByOrderId(orderId) {
      return prisma.orderItem.findMany({ where: { orderId } });
    },
    async delete(id) {
      await prisma.orderItem.delete({ where: { id } });
    },
  };
};
