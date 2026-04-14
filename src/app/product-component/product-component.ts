import { Component } from '@angular/core';
import { ProductService } from '../services/product-service';
import { IProduct } from '../models/IProduct';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { HomeComponent } from "../home-component/home-component";

@Component({
  selector: 'app-product-component',
  imports: [CommonModule, RouterModule, HomeComponent],
  standalone: true,
  templateUrl: './product-component.html',
  styleUrl: './product-component.css',
})
export class ProductComponent {
  ProductArray: IProduct[];
  selectedProduct: IProduct | null = null;
  constructor(
    private ProductService_data: ProductService,
    private router: Router,
  ) {
    this.ProductArray = ProductService_data.ProductArray;
    // console.log(this.ProductArray);
  }

  getProductById(id: number) {
    this.selectedProduct = this.ProductService_data.GetProductById(id);
  }
  get GetProducts() {
    return this.ProductService_data.GetProducts;
  }
  goToProductDetails(id: number) {
    this.router.navigate(['/product', id]);
  }
}
