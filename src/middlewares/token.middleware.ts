import { Request, Response, NextFunction } from 'express';
import Jwt from '../utils/jwt.util';

const validateToken = (req: Request, res: Response, next: NextFunction) => {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }
  const jwt = new Jwt();
  const decoded = jwt.validateToken(token);

  if (!decoded) {
    return res.status(401).json({ message: 'Invalid token' });
  }

  req.body.user = decoded;
  
  next();
};

export = {
  validateToken,
};