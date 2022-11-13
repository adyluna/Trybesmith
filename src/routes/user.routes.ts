import { Router } from 'express';
import UserController from '../controller/user.controller';
import UserMiddleware from '../middlewares/user.middleware';

const router = Router();

router.post(
  '/',
  UserMiddleware.validateUsername,
  UserMiddleware.validateClasse,
  UserMiddleware.validateLevel,
  UserMiddleware.validatePassword,
  UserController.createUser,
);

export default router;