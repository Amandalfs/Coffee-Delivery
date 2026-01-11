import CurrentIcon from "@/components/Icons/CurrentIcon";
import MapPinIcon from "@/components/Icons/MapPinIcon";
import TimerIcon from "@/components/Icons/TimerIcon";

import DeliveryImg from "@/assets/imgs/Delivery.svg";
import Image from "next/image";

export default function Success() {
  return (
   <div className="flex flex-col gap-10">
    <div className="flex flex-col gap-1">
      <h1 className="text-product-yellow-dark font-title font-extrabold text-size-text-L">Uhu! Pedido confirmado</h1>
      <p className="text-base-subtitle font-base font-medium leading-tight text-size-text-L">Agora é só aguardar que logo o café chegará até você</p>
    </div>
    <div className="flex justify-between">
      <div className="
        w-131.5 h-67.5 
        border 
        rounded-tr-[36px] rounded-bl-[36px] rounded-br-[6px] rounded-tl-[6px] 
        bg-linear-to-r from-product-yellow to-product-purple
        p-[1.5px]
        flex items-center justify-center
      ">
        <div className="bg-white w-full h-full flex flex-col gap-8 rounded-tr-[36px] rounded-bl-[36px] rounded-br-[6px] rounded-tl-[6px] p-10">
          <div className="flex gap-3">
            <div className="flex items-center justify-center bg-product-purple size-8 rounded-full">
              <MapPinIcon className="size-4 fill-white" />
            </div>
            <div>
              <p className="font-base text-size-text-M text-base-text leading-tight">
                Entrega em <strong className="font-bold">Rua João Daniel Martinelli, 102</strong>
              </p>
              <p className="font-base text-size-text-M text-base-text leading-tight">
                Farrapos - Porto Alegre, RS
              </p>  
            </div>
          </div>

          <div className="flex gap-3">
            <div className="flex items-center justify-center bg-product-yellow size-8 rounded-full">
              <TimerIcon className="size-4 fill-white" />
            </div>
            <div>
              <p className="font-base text-size-text-M text-base-text leading-tight">
                Previsão de entrega
              </p>
              <strong className="font-base font-bold text-size-text-M text-base-text leading-snug">
                20 min - 30 min
              </strong>  
            </div>
          </div>

          <div className="flex gap-3">
            <div className="flex items-center justify-center size-8 bg-product-yellow-dark rounded-full">
              <CurrentIcon className="size-4 fill-white" />
            </div>
            <div>
              <p className="font-base font-medium text-size-text-M text-base-text leading-tight">
                Pagamento na entrega
              </p>
              <strong className="font-base font-bold text-size-text-M text-base-text leading-tight">
                Cartão de Crédito
              </strong>  
            </div>
          </div>
        </div>
      </div>
      <Image src={DeliveryImg} width={492} height={293} alt="Delivery"/>
    </div>
   </div>
  );
}
