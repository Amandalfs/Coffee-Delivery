import { IDataFormCheckoutValidSchema } from "@/app/checkout/page";
import { FormMethodPayment } from "../FormMethodPayment/FormMethodPayment";
import CurrrentIcon from "../Icons/CurrentIcon";
import MapPinLineIcon from "../Icons/MapPinLineIcon";
import { InputText } from "../InputText/InputText";
import { Control, FieldErrors, UseFormHandleSubmit, UseFormRegister } from "react-hook-form";

interface FormOrderProps {
    register: UseFormRegister<IDataFormCheckoutValidSchema>;
    errors: FieldErrors<IDataFormCheckoutValidSchema>;
    control: Control<IDataFormCheckoutValidSchema, any, IDataFormCheckoutValidSchema>,
    handleSubmit: UseFormHandleSubmit<IDataFormCheckoutValidSchema>;
}

export function FormOrder({ register, errors, control, handleSubmit }: FormOrderProps) {
    function yourOnSubmitFunction(data: IDataFormCheckoutValidSchema) {
        console.log(data);
    }

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
            <form className="flex flex-col gap-4" id="checkout-form" onSubmit={handleSubmit(yourOnSubmitFunction)} >
                <div className="w-50">
                    <InputText placeholder="CEP"  className="w-50" {...register("Cep")} />
                    {
                      errors.Cep && <span className="text-red-500 pl-1 text-size-text-S">{errors.Cep.message}</span>
                    }
                </div>
                <div className="w-140">
                    <InputText placeholder="Rua" className="w-140" {...register("Rua")} />
                    {
                      errors.Rua && <span className="text-red-500 pl-1 text-size-text-S">{errors.Rua.message}</span>
                    }
                </div>
                <div className="flex justify-evenly gap-3" {...register("Numero")}>
                    <div className="w-50">
                        <InputText placeholder="Número" className="w-50" {...register("Numero")} />
                        { 
                            errors.Numero && <span className="text-red-500 pl-1 text-size-text-S">{errors.Numero.message}</span>
                        }
                    </div>
                    <div className="w-87">
                        <InputText placeholder="Complemento" className="w-87" {...register("Complemento")} isOptional />
                        { 
                            errors.Complemento && <span className="text-red-500 pl-1 text-size-text-S">{errors.Complemento.message}</span>
                        }
                    </div>
                </div>
                <div className="flex justify-between gap-3">
                    <div className="w-50">
                        <InputText placeholder="Bairro" className="w-50" {...register("Bairro")} />
                        { 
                            errors.Bairro && <span className="text-red-500 pl-1 text-size-text-S">{errors.Bairro.message}</span>
                        }
                    </div>
                    <div className="w-69">
                        <InputText placeholder="Cidade" className="w-69" {...register("Cidade")} />
                        {
                            errors.Cidade && <span className="text-red-500 pl-1 text-size-text-S">{errors.Cidade.message}</span>
                        }
                    </div>
                    <div className="w-15">
                        <InputText placeholder="UF" className="w-15 pr-0" {...register("UF")} />
                        {
                            errors.UF && <span className="text-red-500 pl-1 text-size-text-S">{errors.UF.message}</span>
                        }
                    </div>
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
            <FormMethodPayment control={control} />
        </div>
    </div>;
}