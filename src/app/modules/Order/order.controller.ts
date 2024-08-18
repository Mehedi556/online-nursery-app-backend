import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { OrderServices } from "./order.service";

const createOrder = catchAsync(async (req, res) => {
    const payload = req.body;
    const result = await OrderServices.createOrderIntoDB(payload);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Order created successfully',
        data: result,
    });
});

export const OrderControllers = {
    createOrder
};