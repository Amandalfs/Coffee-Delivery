import { Catalog } from "@/components/Catalog/Catalog";
import { FormMethodPayment } from "@/components/FormMethodPayment/FormMethodPayment";
import { InputText } from "@/components/InputText/InputText";
import { MyCartButton } from "@/components/MyCartButton/MyCartButton";
import { PrimaryButton } from "@/components/PrimaryButton/PrimaryButton";
import { SecondaryButton } from "@/components/SecondaryButton/SecondaryButton";

export default function Home() {
  return (
   <div className="flex flex-col gap-2 mx-40 pb-160 w-auto">
    <PrimaryButton>
     Confirmar Pedido de compra
    </PrimaryButton>
    <SecondaryButton />
    <InputText placeholder="Email" isOptional={true} />
    <FormMethodPayment />
    <MyCartButton quantiy={3} />
    <Catalog />
   </div>
  );
}
