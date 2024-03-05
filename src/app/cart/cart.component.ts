import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CartService, Product } from "../cart/cart.services";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-cart",
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"],
})
export class CartComponent implements OnInit {
  cart: Product[] = [];
  totalItems: number = 0;
  totalPrice: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cart = this.cartService.getCart();
    this.updateTotals();

    const links = document.querySelectorAll<HTMLAnchorElement>("a");
    links.forEach((link) => {
      link.addEventListener("click", (e) => e.preventDefault());
    });
  }

  updateTotals(): void {
    this.cartService.updateTotals();
    this.totalItems = this.cartService.totalItems;
    this.totalPrice = this.cartService.totalPrice;
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    this.cart = this.cartService.getCart();
    this.updateTotals();
  }

  removeFromCart(index: number) {
    this.cartService.removeFromCart(index);
    this.cart = this.cartService.getCart();
    this.updateTotals();
  }

  checkout() {
    this.cartService.clearCart();
    this.cart = this.cartService.getCart();
    this.updateTotals();
  }

  getTotalItems() {
    return this.cart.length;
  }

  getTotalPrice() {
    return this.cartService.updateTotals().totalPrice.toFixed(2);
  }

  purchaseHistory: Product[] = [].slice(-5);
}
