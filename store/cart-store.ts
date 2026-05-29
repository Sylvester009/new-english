import { create } from "zustand";
import { persist } from "zustand/middleware";

export type CartItem = {
    image_url: string | StaticImport;
    id: string;
    name: string;
    price: number;
    image: string;
    description: string;
    quantity: number;
};

type CartStore = {
    items: CartItem[];

    addToCart: (product: Omit<CartItem, "quantity">, quantity?: number) => void;

    removeFromCart: (id: string) => void;

    increaseQuantity: (id: string) => void;

    decreaseQuantity: (id: string) => void;

    clearCart: () => void;

    subtotal: () => number;

    totalItems: () => number;
};

export const useCartStore = create<CartStore>()(
    persist(
        (set, get) => ({
            items: [],

            addToCart: (product, quantity = 1) => {
                const existingItem = get().items.find(
                    (item) => item.id === product.id
                );

                if (existingItem) {
                    set({
                        items: get().items.map((item) =>
                            item.id === product.id
                                ? {
                                    ...item,
                                    quantity: item.quantity + quantity,
                                }
                                : item
                        ),
                    });
                } else {
                    set({
                        items: [
                            ...get().items,
                            {
                                ...product,
                                quantity,
                            },
                        ],
                    });
                }
            },

            removeFromCart: (id) => {
                set({
                    items: get().items.filter(
                        (item) => item.id !== id
                    ),
                });
            },

            increaseQuantity: (id) => {
                set({
                    items: get().items.map((item) =>
                        item.id === id
                            ? {
                                ...item,
                                quantity: item.quantity + 1,
                            }
                            : item
                    ),
                });
            },

            decreaseQuantity: (id) => {
                set({
                    items: get().items
                        .map((item) =>
                            item.id === id
                                ? {
                                    ...item,
                                    quantity: item.quantity - 1,
                                }
                                : item
                        )
                        .filter((item) => item.quantity > 0),
                });
            },

            clearCart: () => {
                set({ items: [] });
            },

            subtotal: () => {
                return get().items.reduce(
                    (acc, item) =>
                        acc + item.price * item.quantity,
                    0
                );
            },

            totalItems: () => {
                return get().items.reduce(
                    (acc, item) => acc + item.quantity,
                    0
                );
            },
        }),
        {
            name: "cart-storage",
        }
    )
);
