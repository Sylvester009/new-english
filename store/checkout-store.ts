import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type PaymentMethod = 'card' | 'apple_pay';

type PaymentInfo = {
    method: PaymentMethod;

    cardholderName: string;
    cardNumber: string;
    expiry: string;
    cvv: string;

    billingSameAsDelivery: boolean;
};

type DeliveryMethod = 'pickup' | 'delivery';

type DeliveryInfo = {
    firstName: string;
    lastName: string;
    address: string;
    city: string;
    postcode: string;
    phone: string;
};

type CheckoutStore = {
    step: number;

    deliveryMethod: DeliveryMethod;

    deliveryInfo: DeliveryInfo;

    paymentMethod: PaymentMethod;

    paymentInfo: PaymentInfo;

    setStep: (step: number) => void;

    nextStep: () => void;

    prevStep: () => void;

    resetCheckout: () => void;

    setDeliveryMethod: (
        method: DeliveryMethod
    ) => void;

    updateDeliveryInfo: (
        data: Partial<DeliveryInfo>
    ) => void;

    setPaymentMethod: (
        method: PaymentMethod
    ) => void;

    updatePaymentInfo: (
        data: Partial<PaymentInfo>
    ) => void;

};

export const useCheckoutStore = create<CheckoutStore>()(
    persist(
        (set, get) => ({
            step: 1,

            deliveryMethod: 'delivery',

            deliveryInfo: {
                firstName: '',
                lastName: '',
                address: '',
                city: '',
                postcode: '',
                phone: '',
            },

            paymentMethod: "card",

            paymentInfo: {
                method: 'card',
                cardholderName: '',
                cardNumber: '',
                expiry: '',
                cvv: '',
                billingSameAsDelivery: true,
            },

            setStep: step => set({ step }),

            nextStep: () =>
                set({
                    step: get().step + 1,
                }),

            prevStep: () =>
                set({
                    step: get().step - 1,
                }),

            resetCheckout: () =>
                set({
                    step: 1,
                }),

            setDeliveryMethod: method =>
                set({
                    deliveryMethod: method,
                }),

            updateDeliveryInfo: data =>
                set(state => ({
                    deliveryInfo: {
                        ...state.deliveryInfo,
                        ...data,
                    },
                })),

            setPaymentMethod: (method: PaymentMethod) =>
                set(state => ({
                    paymentInfo: {
                        ...state.paymentInfo,
                        method,
                    },
                })),

            updatePaymentInfo: (data: Partial<PaymentInfo>) =>
                set(state => ({
                    paymentInfo: {
                        ...state.paymentInfo,
                        ...data,
                    },
                })),
        }),
        {
            name: 'checkout-storage',
        }
    )
);