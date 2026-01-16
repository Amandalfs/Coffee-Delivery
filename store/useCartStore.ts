import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// 1. Defina o que é um Produto da sua cafeteria
interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
}

// 2. Defina o item dentro do carrinho (Produto + Quantidade)
interface CartItem extends Product {
  quantity: number;
}

// 3. Defina as ações e o estado da Store
interface CartState {
  cart: CartItem[];
  addToCart: (product: Product, quantity: number) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, action: 'increase' | 'decrease') => void;
  listCartItems: () => CartItem[];
  clearCart: () => void;
  totalPrice: () => number;
  totalItems: () => number;
}

// 4. Crie a store com persistência
export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      cart: [],

      addToCart: (product, quantity) => {
        const { cart } = get();
        const itemExists = cart.find((item) => item.id === product.id);

        if (itemExists) {
          set({
            cart: cart.map((item) =>
              item.id === product.id
                ? { ...item, quantity: item.quantity + quantity }
                : item
            ),
          });
        } else {
          set({ cart: [...cart, { ...product, quantity: 1 }] });
        }
      },

      removeFromCart: (productId) => {
        set((state) => ({
          cart: state.cart.filter((item) => item.id !== productId),
        }));
      },

      updateQuantity: (productId, action) => {
        const { cart } = get();
        set({
          cart: cart.map((item) => {
            if (item.id === productId) {
              const newQuantity = action === 'increase' ? item.quantity + 1 : item.quantity - 1;
              return { ...item, quantity: Math.max(1, newQuantity) }; // Evita quantidade menor que 1
            }
            return item;
          }),
        });
      },

      clearCart: () => set({ cart: [] }),

      // Função utilitária para calcular o total
      totalPrice: () => {
        const { cart } = get();
        return cart.reduce((total, item) => total + item.price * item.quantity, 0);
      },

      totalItems: () => {
        const { cart } = get();
        return cart.reduce((total, item) => total + item.quantity, 0);
      },
      listCartItems: () => {
        const { cart } = get();
        return cart;
      },
    }),
    {
      name: 'cart-cafeteria-storage', // chave no localStorage
    }
  )
);