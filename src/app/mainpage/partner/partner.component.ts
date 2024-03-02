import { Component } from "@angular/core";

@Component({
  selector: "app-partner",
  standalone: true,
  imports: [],
  templateUrl: "./partner.component.html",
  styleUrl: "./partner.component.css",
})
export class PartnerComponent {
  brands = [
    "./assets/brands/nike.png",
    "./assets/brands/adidas.png",
    "./assets/brands/rebook.png",
    "./assets/brands/vans.png",
  ];
}
