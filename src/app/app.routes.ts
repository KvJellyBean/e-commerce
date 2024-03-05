import { Routes } from "@angular/router";
import { MainpageComponent } from "./mainpage/mainpage.component";
import { LoginComponent } from "./login/login.component";
import { CartComponent } from "./cart/cart.component";
import { ShopComponent } from "./shop/shop.component";

export const routes: Routes = [
  { path: "", component: MainpageComponent },
  { path: "home", component: MainpageComponent },
  { path: "shop", component: ShopComponent },
  { path: "cart", component: CartComponent },
  { path: "login", component: LoginComponent },
  { path: "**", component: MainpageComponent },
];
