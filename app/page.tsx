import { FormMethodPayment } from "@/components/FormMethodPayment/FormMethodPayment";
import TrashIcon from "@/components/Icons/TrashIcon";
import { InputNumber } from "@/components/InputNumber/InputNumber";
import { InputText } from "@/components/InputText/InputText";
import { MyCartButton } from "@/components/MyCartButton/MyCartButton";
import { PrimaryButton } from "@/components/PrimaryButton/PrimaryButton";
import { PurchaseButton } from "@/components/PurchaseButton/PurchaseButton";
import { SecondaryButton } from "@/components/SecondaryButton/SecondaryButton";
import { Tag } from "@/components/Tag/Tag";

export default function Home() {
  return (
   <div className="flex flex-col gap-2 mx-40">
    <PrimaryButton>
     Confirmar Pedido de compra
    </PrimaryButton>
    <SecondaryButton />
    <PurchaseButton />
    <InputText placeholder="Email" isOptional={true} />
    <InputNumber />
    <FormMethodPayment />
    <MyCartButton quantiy={3} />
    <Tag>
      Tradicional
    </Tag>
    <Tag>
      especial
    </Tag>
    <Tag>
      com leite
    </Tag>
   </div>
  );
}
