import { Component } from "@angular/core";
import { CartService } from "../../cart/cart.services";
import { CommonModule } from "@angular/common";

interface Product {
  name: string;
  price: string;
  description: string;
  image: string;
}

@Component({
  selector: "app-hot-product",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./hot-product.component.html",
  styleUrl: "./hot-product.component.css",
})
export class HotProductComponent {
  products: Product[] = [
    {
      name: 'Product 1',
      price: '18.55',
      description: 'This is product 1',
      image: './assets/slides/slide1.png',
    },

    {
      name: 'Product 2',
      price: '18.55',
      description: 'This is product 2',
      image: './assets/slides/slide2.png',
    },

    {
      name: 'Product 3',
      price: '18.55',
      description: 'This is product 3',
      image: './assets/slides/slide3.png',
    },

  ];

  images = [
    "./assets/slides/slide1.png",
    "./assets/slides/slide2.png",
    "./assets/slides/slide3.png",
  ];

  constructor(private cartService: CartService) {}

  addProductToCart(product: Product) {
    this.cartService.addToCart(product);
  }
}
