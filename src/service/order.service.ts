import connection from '../models/connection';
import OrderModel from '../models/order.model';
import OrderInteface from '../interfaces/order.interface';

class OrderService {
  public model: OrderModel;

  constructor() {
    this.model = new OrderModel(connection);
  }

  public async getAll(): Promise<OrderInteface[]> {
    const orders = await this.model.getAll();
    return orders;
  }

  public async create(userId: number, productsIds: number[]): Promise<OrderInteface> {
    const createdOrder = this.model.create(userId, productsIds);
    return createdOrder;
  }
}

export default OrderService;