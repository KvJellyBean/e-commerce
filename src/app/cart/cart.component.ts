import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Product {
  name: string;
  price: string;
  description: string;
  image: string;
  totalItems?: number; // Optional property
  totalPrice?: number; // Optional property
}

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})

export class CartComponent {
  product: Product = {
    name: 'Product Name',
    price: 'Product Price',
    description: 'Product Description',
    image: 'Product Image URL',
    totalItems: 0, // Initialize totalItems to 0
    totalPrice: 0, // Initialize totalPrice to 0
  };

  cart: Product[] = [];

  addToCart(product: Product) {
    this.cart.push(product);
    this.product.totalItems = this.cart.length; // Update totalItems
    if (this.product.totalPrice !== undefined) {
      this.product.totalPrice += Number(product.price); // Update totalPrice
    }
  }

  removeFromCart(index: number) {
    if (index > -1) {
      this.cart.splice(index, 1);
      this.product.totalItems = this.cart.length; // Update totalItems
      if (this.product.totalPrice !== undefined) {
        this.product.totalPrice -= Number(this.cart[index].price); // Update totalPrice
      }
    }
  }

  checkout() {
    // Implement the checkout logic here
    // For example, you might want to clear the cart after checkout
    this.cart = [];
    this.product.totalItems = 0; // Reset totalItems
    this.product.totalPrice = 0; // Reset totalPrice
  }

  getTotalItems() {
    return this.cart.length;
  }

  purchaseHistory: Product[] = [].slice(-5);
}
