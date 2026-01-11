import { CartItemCoffee } from "../CartItemCoffee/CartItemCoffee";
import { PrimaryButton } from "../PrimaryButton/PrimaryButton";

export function OrderListCoffee() {
    return <div className="flex flex-col gap-3 w-full">
        <h1 className="text-base-subtitle font-title font-bold leading-tight text-size-title-XS">Cafés selecionados seu pedido</h1>
        <div className="flex flex-col m-10">
                {/* lista de cafés */}
            <div>
                {[1, 2, 3].map(() => (
                    <div key={Math.random()}>
                        <CartItemCoffee />
                    </div>
                ))}
            </div>
            <div>
                {/* resumo do pedido */}
                <div className="flex flex-col gap-3 mb-6">
                    <div className="flex justify-between">
                        <p className="text-size-text-S text-base-text leading-tight font-medium font-base">Total de itens</p>
                        <p className="text-size-text-M text-base-text leading-tight font-medium font-base">R$ 29,70</p>
                    </div>
                    <div className="flex justify-between">
                        <p className="text-size-text-S text-base-text leading-tight font-medium font-base">Entrega</p>
                        <p className="text-size-text-M text-base-text leading-tight font-medium font-base">R$ 3,50</p>
                    </div>
                </div>
                <div className="flex justify-between mb-8">
                    <div className="flex justify-between w-full">
                        <p className="text-size-large text-base-subtitle font-base font-bold leading-tight text-size-text-L">Total</p>
                        <p className="text-size-large text-base-subtitle font-base font-bold leading-tight text-size-text-L">R$ 33,20</p>
                    </div>
                </div>
                <PrimaryButton>
                    CONFIRMAR PEDIDO
                </PrimaryButton>
            </div>
        </div>
    </div>;
}