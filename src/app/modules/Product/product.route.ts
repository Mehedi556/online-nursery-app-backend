import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { ProductValidationSchema } from './product.validation';
import { ProductControllers } from './product.controller';

const router = express.Router();

router.post('/', validateRequest(ProductValidationSchema), ProductControllers.createProduct);
router.get('/', ProductControllers.getAllProducts);
router.get('/category/:id', ProductControllers.getAllProductsAsCategory);
router.get('/:id', ProductControllers.getSingleProduct);
router.patch('/:id', ProductControllers.updateProduct);
router.delete('/:id', ProductControllers.deleteProduct);

export const ProductRoutes = router;
