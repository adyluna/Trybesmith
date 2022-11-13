import { Pool, ResultSetHeader } from 'mysql2/promise';
import OrderInterface from '../interfaces/order.interface';

export default class OrderModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<OrderInterface[]> {
    const result = await this
      .connection
      .execute(
        'SELECT Orders.id,Orders.userId, JSON_ARRAYAGG(Products.id) '
        + 'AS productsIds FROM Trybesmith.Orders '
        + 'INNER JOIN Trybesmith.Products ON Trybesmith.Orders.id = Trybesmith.Products.orderId '
        + 'GROUP BY Orders.id',
      );

    const [rows] = result;
    return rows as OrderInterface[];
  }

  public async create(userId: number, productsIds: number[]): Promise<OrderInterface> {
    const result = await this
      .connection
      .execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Orders (userId) VALUES (?)',
      [...productsIds],
    );
    
    const [dataInserted] = result;
    const { insertId } = dataInserted;

    return { id: insertId, userId, productsIds };
  }
}