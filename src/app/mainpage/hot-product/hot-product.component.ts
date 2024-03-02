import { Component } from "@angular/core";

@Component({
  selector: "app-hot-product",
  standalone: true,
  imports: [],
  templateUrl: "./hot-product.component.html",
  styleUrl: "./hot-product.component.css",
})
export class HotProductComponent {
  images = [
    "./assets/slides/slide1.png",
    "./assets/slides/slide2.png",
    "./assets/slides/slide3.png",
  ];
}
