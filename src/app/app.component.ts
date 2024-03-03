import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { HeaderComponent } from "./header/header.component";
import { MainpageComponent } from "./mainpage/mainpage.component";
import { FooterComponent } from "./footer/footer.component";
import { LoginComponent } from "./login/login.component";
import { CartComponent } from "./cart/cart.component";

@Component({
    selector: "app-root",
    standalone: true,
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.css"],
    imports: [
        RouterOutlet,
        NgbModule,
        HeaderComponent,
        MainpageComponent,
        FooterComponent,
        LoginComponent,
        CartComponent
    ]
})
export class AppComponent {
  title = "E-Commerce";
}
