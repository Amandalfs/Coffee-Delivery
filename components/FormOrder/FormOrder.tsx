import { FormMethodPayment } from "../FormMethodPayment/FormMethodPayment";
import CurrrentIcon from "../Icons/CurrentIcon";
import MapPinLineIcon from "../Icons/MapPinLineIcon";
import { InputText } from "../InputText/InputText";

export function FormOrder() {
    return <div className="flex flex-col gap-3 w-160 ">
        <h1 className="text-base-subtitle font-title font-bold leading-tight text-size-title-XS">Complete seu pedido</h1>
        <div className="flex flex-col m-10 gap-8">
            <div className="flex gap-2">
                <MapPinLineIcon className="size-6 fill-product-yellow-dark" />
                <div className="flex flex-col gap-0.5">
                    <h2>Endereço de Entrega</h2>
                    <p>Informe o endereço onde deseja receber seu pedido</p>
                </div>
            </div>
            <form className="flex flex-col gap-4 ">
                <InputText placeholder="CEP" className="w-50" />
                <InputText placeholder="Rua" className="w-140" />
                <div className="flex justify-evenly gap-3">
                    <InputText placeholder="Número" className="w-50" />
                    <InputText placeholder="Complemento" className="w-87" isOptional />
                </div>
                <div className="flex justify-between gap-3">
                    <InputText placeholder="Bairro" className="w-50" />
                    <InputText placeholder="Cidade" className="w-69" />
                    <InputText placeholder="UF" className="w-15 pr-0" />
                </div>
            </form>
        </div>
        <div className="flex flex-col mx-10  gap-8">
            <div className="flex gap-2">
                <CurrrentIcon className="size-6 fill-product-purple" />
                <div className="flex flex-col gap-0.5">
                    <h2>Pagamento</h2>
                    <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
                </div>
            </div>
            <FormMethodPayment />
        </div>
    </div>;
}