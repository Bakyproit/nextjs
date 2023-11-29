import { Injectable } from '@nestjs/common';
import { Product } from 'src/models/product.model';
@Injectable()
export class ProductService {
  private products: Product[] = [
    { id: 1, categoryId: 2, price: 80000, productName: 'giay' },
    { id: 2, categoryId: 3, price: 90000, productName: 'ao' },
    { id: 3, categoryId: 4, price: 90000, productName: 'quan' },
    { id: 4, categoryId: 5, price: 80000, productName: 'goi' },
  ];

  getProducts(): Product[] {
    return this.products;
  }

  createProduct(): string {
    return 'POST PRODUCTS';
  }

  detailProduct(id: number): Product {
    return this.products.find((item) => item.id === Number(id));
  }
  updateProduct(): string {
    return 'UPDATE PRODUCTS';
  }

  deleteProduct(): string {
    return 'DELETE PRODUCTS';
  }
}
