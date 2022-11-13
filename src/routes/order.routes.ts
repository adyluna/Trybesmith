import { Router } from 'express';
import Token from '../middlewares/token.middleware';
import OrderController from '../controller/order.controller';
import OrderMiddleware from '../middlewares/order.middleware';

const router = Router();

router.get('/', OrderController.getAll);
router.post('/', Token.validateToken, OrderMiddleware.validateOrder, OrderController.create);

export default router;