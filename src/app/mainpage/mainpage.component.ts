import { Component } from "@angular/core";
import { NgbModule, NgbCarouselConfig } from "@ng-bootstrap/ng-bootstrap";
import { PartnerComponent } from "./partner/partner.component";
import { FeedbackComponent } from "./feedback/feedback.component";
import { HotProductComponent } from "./hot-product/hot-product.component";

@Component({
  selector: "app-mainpage",
  standalone: true,
  imports: [
    NgbModule,
    HotProductComponent,
    FeedbackComponent,
    PartnerComponent,
  ],
  templateUrl: "./mainpage.component.html",
  styleUrl: "./mainpage.component.css",
})
export class MainpageComponent {
  images = [
    "./assets/slides/slide1.png",
    "./assets/slides/slide2.png",
    "./assets/slides/slide3.png",
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
