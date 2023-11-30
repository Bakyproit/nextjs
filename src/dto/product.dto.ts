import { IsNotEmpty, IsNumber, MinLength } from 'class-validator';

//truyen du lieu tu client len server
export class ProductDto {
  @IsNotEmpty({ message: 'categoryId khong duoc de rong' })
  categoryId?: number;

  @MinLength(5, { message: 'ProductName phai co it nhat 5 ky tu' })
  productName?: string;

  @IsNumber()
  price: number;
}
