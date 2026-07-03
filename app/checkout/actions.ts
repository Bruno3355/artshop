"use server";

import { makeOrderItemRepository } from "@/src/core/infrastructure/repositories/PrismaOrderItemRepository";
import { makeOrderRepository } from "@/src/core/infrastructure/repositories/PrismaOrderRepository";
import { CreateOrderItemDTO } from "@/src/core/domain/entities/dtos/createOrderItemDTO";
import { createOrderUseCase } from "@/src/core/use_cases/CreateOrder";
import generateOrderNumber from "@/src/core/domain/utils/generateOrderNumber";
import { CheckoutFormValues } from "@/src/schemas/inputsSchemas";

export async function submitOrder(
  formData: CheckoutFormValues,
  cartItems: CreateOrderItemDTO[],
  total: number,
) {
  if (!cartItems || cartItems.length === 0) {
    throw new Error("Cannot place an order with an empty cart.");
  }

  try {
    const createOrder = createOrderUseCase(
      makeOrderRepository(),
      makeOrderItemRepository(),
    );

    const order = await createOrder(
      {
        orderNumber: generateOrderNumber(),
        customerName: formData.fullname,
        customerEmail: formData.email,
        customerPhone: formData.phoneNumber,
        notes: formData.comments || "",
        shippingAddress: [
          formData.streetAddress,
          formData.city,
          formData.postalCode,
        ]
          .filter(Boolean)
          .join(", "),
        total,
      },
      cartItems,
    );

    return { orderNumber: order.orderNumber };
  } catch (error: any) {
    throw new Error("Something went wrong", error);
  }
}
