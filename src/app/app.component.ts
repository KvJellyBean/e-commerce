import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { HeaderComponent } from "./header/header.component";
import { MainpageComponent } from "./mainpage/mainpage.component";
import { LoginComponent } from "./login/login.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, NgbModule, HeaderComponent, MainpageComponent, LoginComponent],
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "E-Commerce";
}
