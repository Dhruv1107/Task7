import { Component, Input } from "@angular/core";
import { AuthService } from "../auth.service";
import { Router } from "@angular/router";
import { AuthenticateService } from "../authenticate.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent {
  @Input() name: string;
  defaultName: string;

  constructor(
    private router: Router,
    private authenticateService: AuthenticateService
  ) {
    this.defaultName = "ALL";
  }
}
