import { prisma } from "@/lib/prisma";
import { IOrderRepository } from "../../domain/repositories/IOrderRepository";

export const makeOrderRepository = (): IOrderRepository => {
  const includeItems = {
    items: {
      include: { product: true },
    },
  } as const;

  return {
    async create(data) {
      return prisma.order.create({ data, include: includeItems });
    },
    async findAll() {
      return prisma.order.findMany({ include: includeItems });
    },
    async findById(id) {
      return prisma.order.findUnique({ where: { id }, include: includeItems });
    },
    async findByOrderNumber(orderNumber) {
      return prisma.order.findUnique({
        where: { orderNumber },
        include: includeItems,
      });
    },
    async update(id, data) {
      return prisma.order.update({
        where: { id },
        data,
        include: includeItems,
      });
    },
    async delete(id) {
      await prisma.order.delete({ where: { id } });
    },
  };
};
