import { Request, Response } from 'express';
import OrderService from '../service/order.service';

class OrderController {
  constructor(private orderService = new OrderService()) {}

  public getAll = async (req: Request, res: Response) => {
    const orders = await this.orderService.getAll();
    res.status(200).json(orders);
  };

  public create = async (req: Request, res: Response) => {
    const productsIds = req.body;
    const { userId } = req.body.userInfo;
    const createdOrder = await this.orderService.create(userId, productsIds);

    res.status(200).json(createdOrder);
  };
}

export default new OrderController();