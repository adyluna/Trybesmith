import { Router } from 'express';
import OrderController from '../controller/order.controller';

const router = Router();

router.get('/', OrderController.getAll);

export default router;