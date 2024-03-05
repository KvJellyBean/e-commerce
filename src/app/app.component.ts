import { Component, OnInit } from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";
import { RouterOutlet } from "@angular/router";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { HeaderComponent } from "./header/header.component";
import { MainpageComponent } from "./mainpage/mainpage.component";
import { FooterComponent } from "./footer/footer.component";
import { LoginComponent } from "./login/login.component";
import { CartComponent } from "./cart/cart.component";
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

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
        CartComponent,
        RouterModule
        
    ]
})

export class AppComponent implements OnInit {
  title = "E-Commerce";

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }
}