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

    console.log(orders);
    
    return orders;
  }
}

export default OrderService;