import { Request, Response } from 'express';
import OrderService from '../service/order.service';

class OrderController {
  constructor(private orderService = new OrderService()) {}

  public getAll = async (req: Request, res: Response) => {
    const orders = await this.orderService.getAll();
    res.status(200).json(orders);
  };
}

export default new OrderController();