import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductComponent } from './product-component/product-component';
import { HomeComponent } from './home-component/home-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProductComponent, HomeComponent],
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('Exercise1');
}
