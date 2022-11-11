import { Request, Response } from 'express';
import ProductService from '../service/product.service';

class ProductController {
  constructor(private productService = new ProductService()) {}

  public create = async (req: Request, res: Response) => {
    const product = req.body;

    const createdProduct = await this.productService.create(product);
    res.status(201).json(createdProduct);
  };
}

export default new ProductController();