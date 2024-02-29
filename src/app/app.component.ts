import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, NgbModule], // Import NgbModule here
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"], // Use styleUrls for consistency
})
export class AppComponent {
  title = "E-Commerce";
}
