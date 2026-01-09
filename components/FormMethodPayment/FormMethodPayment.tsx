import BankIcon from "../Icons/BankIcon";
import CreditCardIcon from "../Icons/CreditCardIcon";
import MoneyIcon from "../Icons/MoneyIcon";
import { SelectMethodPayment } from "../SelectMethodPayment/SelectMethodPayment";

export function FormMethodPayment(){
    return ( <div className="flex flex-row gap-1">
      <SelectMethodPayment>
        <CreditCardIcon className="fill-product-purple size-4" />
        Cartão de Crédito 
      </SelectMethodPayment>
      <SelectMethodPayment>
        <BankIcon className="fill-product-purple size-4" />
        Cartão de Débito
      </SelectMethodPayment>
      <SelectMethodPayment>
        <MoneyIcon className="fill-product-purple size-4"  />
        Dinheiro 
      </SelectMethodPayment>
    
    </div>)
}