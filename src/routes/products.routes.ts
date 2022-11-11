import { Router } from 'express';
import ProductController from '../controller/product.controller';

const router = Router();

router.post('/', ProductController.create);

export default router;