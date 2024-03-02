import { Component } from "@angular/core";
import { NgbModule, NgbCarouselConfig } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-mainpage",
  standalone: true,
  imports: [NgbModule],
  templateUrl: "./mainpage.component.html",
  styleUrl: "./mainpage.component.css",
})
export class MainpageComponent {
  images = [
    "./assets/slides/slide1.png",
    "./assets/slides/slide2.png",
    "./assets/slides/slide3.png",
  ];

  brands = [
    "./assets/brands/nike.png",
    "./assets/brands/adidas.png",
    "./assets/brands/rebook.png",
    "./assets/brands/vans.png",
  ];

  constructor(config: NgbCarouselConfig) {
    config.interval = 5000;
    config.wrap = true;
    config.keyboard = true;
    config.pauseOnHover = false;
    config.pauseOnFocus = false;
    config.showNavigationIndicators = false;
  }
}
