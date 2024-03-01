import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
  
})
export class CartComponent {
  // Define your variable
  product = {
    name: 'Product Name',
    price: 'Product Price',
    description: 'Product Description',
    image: 'Product Image URL',
    totalItems: 'Total Number of Items',
    totalPrice: 'Total Price',
  };

  purchaseHistory = [

  ].slice(-5);
  removeFromCart() {
    // Implement the logic to remove an item from the cart
  }

  checkout() {
    // Implement the checkout logic
  }
}