import { Control, Controller } from "react-hook-form";
import BankIcon from "../Icons/BankIcon";
import CreditCardIcon from "../Icons/CreditCardIcon";
import MoneyIcon from "../Icons/MoneyIcon";
import { SelectMethodPayment } from "../SelectMethodPayment/SelectMethodPayment";
import { IDataFormCheckoutValidSchema } from "@/app/checkout/page";

interface FormMethodPaymentProps {
    control: Control<IDataFormCheckoutValidSchema, any, IDataFormCheckoutValidSchema>
}

export function FormMethodPayment({ control }: FormMethodPaymentProps) {
    return ( 
    <Controller
        name="MethodPayment"
        control={control}
        rules={{ required: "Selecione um método de pagamento" }}
        render={({ field: { value, onChange } })=> 
          <div className="flex flex-row gap-1">
            <SelectMethodPayment
              isSelected={value === "credit"} 
              onClick={() => onChange("credit")}
            >
              <CreditCardIcon className="fill-product-purple size-4" />
              Cartão de Crédito 
            </SelectMethodPayment>
            <SelectMethodPayment
              isSelected={value === "debit"} 
              onClick={() => onChange("debit")}
            >
              <BankIcon className="fill-product-purple size-4" />
              Cartão de Débito
            </SelectMethodPayment>
            <SelectMethodPayment
              isSelected={value === "money"} 
              onClick={() => onChange("money")}
            >
              <MoneyIcon className="fill-product-purple size-4"  />
              Dinheiro 
            </SelectMethodPayment>
          </div>
        }
    >
      
    </Controller>)
}