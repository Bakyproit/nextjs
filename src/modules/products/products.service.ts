import { Injectable } from '@nestjs/common';
import { ProductDto } from 'src/dto/product.dto';
import { Product } from 'src/models/product.model';

//tra ve du lieu method
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

  createProduct(productDto: ProductDto): Product {
    //tao 1 doi tuong moi
    const product: Product = {
      id: Math.floor(Math.random() * 100) + 1,
      ...productDto,
    };
    this.products.push(product);
    return product;
  }

  detailProduct(id: number): Product {
    return this.products.find((item) => item.id === Number(id));
  }

  updateProduct(productDto: ProductDto, id: number): Product {
    const index = this.products.findIndex((item) => item.id === Number(id));
    this.products[index].categoryId = productDto.categoryId;
    this.products[index].price = productDto.price;
    this.products[index].productName = productDto.productName;
    return this.products[index];
  }

  deleteProduct(id: number): boolean {
    const index = this.products.findIndex((item) => item.id === Number(id));
    if (index !== -1) {
      this.products.splice(index, 1);
      return true;
    }
    return false;
  }
}
