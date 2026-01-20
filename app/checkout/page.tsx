"use client";
import { FormOrder } from "@/components/FormOrder/FormOrder";
import { OrderListCoffee } from "@/components/OrderListCoffee/OrderListCoffee";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const dataFormCheckoutValidSchema = z.object({
    Cep: z.string().min(8, "Informe o CEP").max(9, "CEP inválido"),
    Rua: z.string().min(3, "Informe a Rua"),
    Numero: z.string().min(1, "Informe o Número"),
    Complemento: z.string().optional(),
    Bairro: z.string().min(3, "Informe o Bairro"),
    Cidade: z.string().min(3, "Informe a Cidade"),
    UF: z.string().min(2, "Informe a UF").max(2, "UF inválida"),
    MethodPayment: z.enum(['credit', 'debit', 'money']),
});

export type IDataFormCheckoutValidSchema = z.infer<typeof  dataFormCheckoutValidSchema>;

export default function Checkout() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<IDataFormCheckoutValidSchema>({
    resolver: zodResolver(dataFormCheckoutValidSchema),
  })

  return (
   <div className="flex gap-8 ">
     <FormOrder 
        register={register} 
        errors={errors}
        control={control} 
        handleSubmit={handleSubmit}
      />
     <OrderListCoffee/>
   </div>
  );
}
