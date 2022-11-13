import { Router } from 'express';
import ProductController from '../controller/product.controller';
import ProductMiddleware from '../middlewares/product.middleware';

const router = Router();

router.post(
  '/',
  ProductMiddleware.validateName,
  ProductMiddleware.validateAmount,
  ProductController.create,
);
router.get('/', ProductController.getAll);

export default router;