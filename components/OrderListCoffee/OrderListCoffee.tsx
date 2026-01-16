"use client";
import { useCartStore } from "@/store/useCartStore";
import { CartItemCoffee } from "../CartItemCoffee/CartItemCoffee";
import { PrimaryButton } from "../PrimaryButton/PrimaryButton";
import { useHasMounted } from "@/hooks/useHasMounted";

export function OrderListCoffee() {
    const items = useCartStore((state) => state.listCartItems());
    const updateQuantity = useCartStore((state) => state.updateQuantity);
    const removeFromCart = useCartStore((state) => state.removeFromCart);
    const totalPrice = useCartStore((state) => state.totalPrice());
    const hasMounted = useHasMounted()

    return <div className="flex flex-col gap-3 w-full">
        <h1 className="text-base-subtitle font-title font-bold leading-tight text-size-title-XS">Cafés selecionados seu pedido</h1>
        <div className="flex flex-col m-10">
                {/* lista de cafés */}
            <div>
                {hasMounted && items.map(({ id, name, image, price, quantity }) => (
                    <div key={id}>
                        <CartItemCoffee 
                            name={name}
                            image={image}
                            price={price}
                            quantity={quantity}
                            onChangeQuantity={(value: number) => {
                                updateQuantity(id, value)
                            }}
                            removeItem={() => {
                                removeFromCart(id)
                            }}
                        />
                    </div>
                ))}
            </div>
            <div>
                {/* resumo do pedido */}
                <div className="flex flex-col gap-3 mb-6">
                    <div className="flex justify-between">
                        <p className="text-size-text-S text-base-text leading-tight font-medium font-base">Total de itens</p>
                        <p className="text-size-text-M text-base-text leading-tight font-medium font-base">
                            R$ {
                                hasMounted ? totalPrice.toFixed(2).replaceAll(".", ",")  : '0,00'
                            }
                        </p>
                    </div>
                    <div className="flex justify-between">
                        <p className="text-size-text-S text-base-text leading-tight font-medium font-base">Entrega</p>
                        <p className="text-size-text-M text-base-text leading-tight font-medium font-base">R$ 3,50</p>
                    </div>
                </div>
                <div className="flex justify-between mb-8">
                    <div className="flex justify-between w-full">
                        <p className="text-size-large text-base-subtitle font-base font-bold leading-tight text-size-text-L">Total</p>
                        <p className="text-size-large text-base-subtitle font-base font-bold leading-tight text-size-text-L">
                            R$ {
                                hasMounted ? (totalPrice + 3.5).toFixed(2).replaceAll(".", ",") : '0,00'
                            }
                        </p>
                    </div>
                </div>
                <PrimaryButton>
                    CONFIRMAR PEDIDO
                </PrimaryButton>
            </div>
        </div>
    </div>;
}