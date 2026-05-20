import { Cart } from "@/src/core/domain/entities/cart";
import { currencyConverter } from "@/lib/currencyConverter";
import Image from "next/image";

export default function CardCartItem({ items, total }: Cart) {
  if (!items || items.length == 0) {
    return <div>Your cart is empty.</div>;
  }
  {
    /* Add remove item from cart icon */
  }
  return (
    <div className="flex flex-col gap-4">
      {items.map((product) => (
        <div
          key={product.id}
          className="border p-4 rounded shadow-sm flex gap-container-x "
        >
          <Image
            src={product.miniature ?? "placeholder.webp"}
            alt={product.name}
            width={100}
            height={100}
          />
          <div className="flex flex-col flex-1 justify-center">
            <h3 className="font-bold">{product.name}</h3>
            <div className="text-sm">Quantity: {product.quantity}</div>
            <div className="text-sm">
              Total price: {currencyConverter(total)}
            </div>
            {/* Add minus and more buttons for changing quantity */}
          </div>
        </div>
      ))}
    </div>
  );
}
