import { Router } from 'express';
import Token from '../middlewares/token.middleware';
import OrderController from '../controller/order.controller';

const router = Router();

router.get('/', OrderController.getAll);
router.post('/', Token.validateToken, OrderController.create);

export default router;