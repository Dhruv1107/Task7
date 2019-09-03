import { Component, OnInit } from "@angular/core";
import { AuthenticateService } from "../authenticate.service";

@Component({
  selector: "app-auth",
  templateUrl: "./auth.component.html",
  styleUrls: ["./auth.component.css"]
})
export class AuthComponent {
  constructor(private authenticateService: AuthenticateService) {}
}
