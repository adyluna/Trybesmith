import { Router } from 'express';
import UserController from '../controller/user.controller';
import UserMiddleware from '../middlewares/user.middleware';

const router = Router();

router.post('/', UserMiddleware, UserController.findUser);

export default router;