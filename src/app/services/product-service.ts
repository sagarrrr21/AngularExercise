import { Injectable } from '@angular/core';
import { IProduct } from '../models/IProduct';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  ProductArray: IProduct[] = [
    {
      id: 1,
      name: 'Laptop',
      price: 50034,
      description: 'Asus Lapton a15',
    },
    {
      id: 2,
      name: 'HeadPhones',
      price: 8999,
      description: 'Boat HeadPhones',
    },
    {
      id: 3,
      name: 'Mouse',
      price: 899,
      description: 'Zebronics Mouse',
    },
    {
      id: 4,
      name: 'Keyboard',
      price: 9999,
      description: 'Mechanical Keyboard',
    },
    {
      id: 5,
      name: 'Mouse Pad',
      price: 550,
      description: 'White Mouse pad',
    },
  ];

  get GetProducts() {
    // console.log(this.ProductArray);
    return this.ProductArray;
  }

  GetProductById(id: number): IProduct {
    return this.ProductArray.find((p) => p.id === id)!;
  }
}
