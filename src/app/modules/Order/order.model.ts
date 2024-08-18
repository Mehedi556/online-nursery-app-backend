import { Schema, model } from "mongoose";
import { TOrder } from "./order.interface";

const orderSchema = new Schema<TOrder>({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    paymentType: {
        type: String,
        required: true
    },
    totalAmount: {
        type: Number,
        required: true
    },
    // quantity: {
    //     type: Number,
    //     required: true
    // },
    products: {
        required: true,
        type: [
            {
                title: {
                    type: String,
                    required: true
                },
                category: {
                    type: String,
                    required: true
                },
                price: {
                    type: Number,
                    required: true
                },
                quantity: {
                    type: Number,
                    required: true
                },
            }
        ]
    }
})

export const Order = model<TOrder>('Order', orderSchema)