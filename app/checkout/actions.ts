"use server";

import { makeOrderItemRepository } from "@/src/core/infrastructure/repositories/PrismaOrderItemRepository";
import { makeOrderRepository } from "@/src/core/infrastructure/repositories/PrismaOrderRepository";
import { CreateOrderItemDTO } from "@/src/core/domain/entities/dtos/createOrderItemDTO";
import { createOrderUseCase } from "@/src/core/use_cases/CreateOrder";
import { redirect } from "next/navigation";
import generateOrderNumber from "@/src/core/domain/utils/generateOrderNumber";

export async function submitOrder(
  formData: FormData,
  cartItems: CreateOrderItemDTO[],
  total: number,
) {
  const createOrder = createOrderUseCase(
    makeOrderRepository(),
    makeOrderItemRepository(),
  );

  const order = await createOrder(
    {
      orderNumber: generateOrderNumber(),
      customerName: formData.get("full-name") as string,
      customerEmail: formData.get("e-mail") as string,
      customerPhone: formData.get("phone") as string,
      notes: formData.get("notes") as string,
      shippingAddress: [
        formData.get("street"),
        formData.get("city"),
        formData.get("zip"),
      ]
        .filter(Boolean)
        .join(", "),
      total,
    },
    cartItems,
  );

  redirect(`/checkout/confirmation/${order.orderNumber}`);
}
