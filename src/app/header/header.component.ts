import { Component, OnInit } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-header",
  standalone: true,
  imports: [RouterLink],
  templateUrl: "./header.component.html",
  styleUrl: "./header.component.css",
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const links = document.querySelectorAll<HTMLAnchorElement>("ul li a");
    links.forEach((link) => {
      link.addEventListener("click", (e) => e.preventDefault());
    });
  }
}
