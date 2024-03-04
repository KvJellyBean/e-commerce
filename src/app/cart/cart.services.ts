import { Injectable } from '@angular/core';

export interface Product {
    name: string;
    price: string;
    description: string;
    image: string;
    totalItems?: number; // Optional property
    totalPrice?: number; // Optional property
}

@Injectable({
    providedIn: 'root',
})

export class CartService {
    cart: Product[] = [];
    totalItems: number = 0; // Initialize totalItems to 0
    totalPrice: number = 0; // Initialize totalPrice to 0

addToCart(product: Product) {
    console.log('Adding product to cart:', product);
    this.cart.push(product);
    console.log('Cart now contains:', this.cart);
    this.updateTotals();
}

removeFromCart(index: number) {
    if (index > -1) {
        this.cart.splice(index, 1);
        this.updateTotals();
    }
}

updateTotals() {
    let totalItems = 0;
    let totalPrice = 0;

    this.cart.forEach((product) => {
        totalItems += 1;
        totalPrice += Number(product.price);
    });

    this.totalItems = totalItems;
    this.totalPrice = totalPrice;
}

    getCart() {
        return this.cart;
}

    clearCart() {
        this.cart = [];
        this.updateTotals();
}
}
