import { Request, Response } from 'express';
import OrderService from '../service/order.service';

class OrderController {
  constructor(private orderService = new OrderService()) {}

  public getAll = async (req: Request, res: Response) => {
    const orders = await this.orderService.getAll();
    res.status(200).json(orders);
  };

  public create = async (req: Request, res: Response) => {
    const products = req.body.productsIds;
    const { id } = req.body.user.data;
    
    const result = await this.orderService.create(id, products);

    if (!result) {
      return res.status(400).json({ message: 'INVALID PRODUCT ID' });
    }

    res.status(201).json({ userId: id, productsIds: products });
  };
}

export default new OrderController();