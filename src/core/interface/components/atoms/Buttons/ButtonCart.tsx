import { Button } from "@/components/ui/button"
import { ShoppingCartIcon } from "lucide-react"

export default function ButtonCart() {
  return (
<Button variant={"ghost"}>
    <ShoppingCartIcon strokeWidth={3}/>
    Cart
</Button>
  )
}
