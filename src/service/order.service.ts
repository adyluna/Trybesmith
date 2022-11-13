import connection from '../models/connection';
import OrderModel from '../models/order.model';
import ProductService from './product.service';
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

  public async create(userId: number, productsIds: number[]) {
    const service = new ProductService();
    const orderId = await this.model.create(userId);
    const productsPromises = await Promise.all(productsIds.map(async (product) => {
      await service.update(orderId, product);
    }));

    if (productsPromises.length !== productsIds.length) {
      return false;
    }

    return true;
  }
}

export default OrderService;