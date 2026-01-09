import { FormMethodPayment } from "@/components/FormMethodPayment/FormMethodPayment";
import { InputText } from "@/components/InputText/InputText";
import { PrimaryButton } from "@/components/PrimaryButton/PrimaryButton";

export default function Home() {
  return (
   <>
    <PrimaryButton>
     Confirmar Pedido de compra
    </PrimaryButton>
    <InputText placeholder="Email" isOptional={true}>
      
    </InputText>
    <FormMethodPayment />
   </>
  );
}
