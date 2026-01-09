import { FormMethodPayment } from "@/components/FormMethodPayment/FormMethodPayment";
import { PrimaryButton } from "@/components/PrimaryButton/PrimaryButton";

export default function Home() {
  return (
   <>
    <PrimaryButton>
     Confirmar Pedido de compra
    </PrimaryButton>
    <FormMethodPayment />
   </>
  );
}
