import express from 'express';
import validateRequest from "../../middlewares/validateRequest";
import { OrderValidationSchema } from './order.validation';
import { OrderControllers } from './order.controller';

const router = express.Router();

router.post('/', validateRequest(OrderValidationSchema), OrderControllers.createOrder);

export const OrderRoutes = router;