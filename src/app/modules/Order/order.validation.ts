import { z } from "zod";

export const OrderValidationSchema = z.object({
    name: z.string(),
    phone: z.string(),
    address: z.string(),
    email: z.string(),
    paymentType:z.string(),
    totalAmount: z.number(),
    // quantity: z.number(),
    products: z.array(
        z.object({
            title: z.string(),
            category: z.string(),
            price: z.number(),
            quantity: z.number(),
        })
    )
})