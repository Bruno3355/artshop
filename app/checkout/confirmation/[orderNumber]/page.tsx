import { Separator } from "@/components/ui/separator";
import { currencyConverter } from "@/lib/currencyConverter";
import { makeOrderRepository } from "@/src/core/infrastructure/repositories/PrismaOrderRepository";
import CardOrderItemDisplay from "@/src/core/interface/components/molecules/Cards/CardOrderItemDisplay";
import ClearCartOnMount from "@/src/core/use_cases/ClearCartOnMount";
import GetOrderByOrderNumber from "@/src/core/use_cases/GetOrderByOrderNumber";

interface Props {
  params: Promise<{ orderNumber: string }>;
}

export default async function Confirmation({ params }: Props) {
  const { orderNumber } = await params;

  const getOrder = GetOrderByOrderNumber(makeOrderRepository());
  const order = await getOrder(orderNumber);

  return (
    <div className="pb-section-y px-section-x flex flex-col">
      <ClearCartOnMount />
      <div className="pt-section-y flex flex-col gap-container-y">
        <div>
          <h1 className="text-display-md">Order Confirmed!</h1>
          <span className="underline">Order Number: #{order.id}</span>
        </div>
        <p>
          Thank you, {order.customerName} for your purchase. Your item is being
          carefully packed and will be on its way to you soon.
        </p>
      </div>
      <Separator className="mt-container-y mb-section-y" />
      <div>
        <h2>Order Summary:</h2>
        <div>
          {order.items.map((item) => (
            <CardOrderItemDisplay
              key={item.id}
              id={item.id}
              name={item.product?.name ?? "Product unavailable"}
              miniature={item.product?.miniature}
              price={Number(item.unitPrice)}
              quantity={item.quantity}
            />
          ))}
          <div className="text-body-lg flex justify-between border-2 rounded-md border-ring my-container-y py-container-y px-container-x">
            <span className="underline font-medium">Cart total:</span>
            {currencyConverter(Number(order.total))}
          </div>
        </div>
      </div>
    </div>
  );
}
