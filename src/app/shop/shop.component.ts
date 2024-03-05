import { Component } from "@angular/core";
import { CartService } from "../cart/cart.services";
import { CommonModule } from "@angular/common";
import { RouterLink } from "@angular/router";

interface Product {
  name: string;
  price: string;
  description: string;
  image: string;
}

@Component({
  selector: "app-shop",
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: "./shop.component.html",
  styleUrl: "./shop.component.css",
})
export class ShopComponent {
  searchResults: Product[] = [];
  products: Product[] = [
    {
      name: "Product 1",
      price: "18.55",
      description: "This is product 1",
      image: "./assets/slides/slide1.png",
    },

    {
      name: "Product 2",
      price: "18.55",
      description: "This is product 2",
      image: "./assets/slides/slide2.png",
    },

    {
      name: "Product 4",
      price: "18.55",
      description: "This is product 3",
      image: "./assets/slides/slide3.png",
    },

    {
      name: "Product 5",
      price: "18.55",
      description: "This is product 1",
      image: "./assets/slides/slide1.png",
    },

    {
      name: "Product 6",
      price: "18.55",
      description: "This is product 2",
      image: "./assets/slides/slide2.png",
    },

    {
      name: "Product 7",
      price: "18.55",
      description: "This is product 3",
      image: "./assets/slides/slide3.png",
    },
  ];

  constructor(private cartService: CartService) {}

  addProductToCart(product: Product, event: Event) {
    event.preventDefault();
    this.cartService.addToCart(product);
  }

  searchProducts(event: any) {
    const searchTerm = event.target.value;
    if (searchTerm.trim() !== "") {
      this.searchResults = this.products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    } else {
      this.searchResults = [];
    }
  }
}
