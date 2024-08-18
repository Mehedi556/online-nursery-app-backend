export type TOrder = {
    name: string;
    phone: string;
    address: string;
    email: string;
    paymentType: string;
    totalAmount: number;
    // quantity: number;
    products: [
        {
            title: string;
            category: string;
            price: number;
            quantity: number;
        }
    ]
}
