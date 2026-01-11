import { FormOrder } from "@/components/FormOrder/FormOrder";
import { OrderListCoffee } from "@/components/OrderListCoffee/OrderListCoffee";

export default function Checkout() {
  return (
   <div className="flex gap-8 ">
     <FormOrder />
     <OrderListCoffee />
   </div>
  );
}
