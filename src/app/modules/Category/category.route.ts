import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { CategoryValidationSchema } from './category.validation';
import { CategoryControllers } from './category.controller';

const router = express.Router();

router.post('/', validateRequest(CategoryValidationSchema), CategoryControllers.createCategory);
router.get('/', CategoryControllers.getAllCategories);
router.patch('/:id', CategoryControllers.updateCategory);
router.delete('/:id', CategoryControllers.deleteCategory);

export const CategoryRoutes = router;