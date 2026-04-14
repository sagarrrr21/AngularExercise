import { Component, OnInit } from '@angular/core';
import { IProduct } from '../models/IProduct';
import { ProductService } from '../services/product-service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from '../not-found-component/not-found-component';

@Component({
  selector: 'app-product-id-component',
  standalone: true,
  imports: [CommonModule, NotFoundComponent],
  templateUrl: './product-id-component.html',
  styleUrl: './product-id-component.css',
})
export class ProductIdComponent implements OnInit {
  selectedProduct: IProduct | null = null;
  productId!: string;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.productId = params['id'];
      this.getProductById(+this.productId);
    });
  }

  getProductById(id: number) {
    this.selectedProduct = this.productService.GetProductById(id);

    if (!this.selectedProduct) {
      console.log('Product Not Found');
    }
  }
}
