import {
  Component,
  OnInit,
  Input,
  ViewChild,
  AfterViewInit
} from "@angular/core";
import { AuthService } from "../auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  @Input() name: string;
  @ViewChild("logIn", { static: false }) logIn;
  @ViewChild("logOut", { static: false }) logOut;
  defaultName: string;

  constructor(private authService: AuthService, private router: Router) {
    this.defaultName = "ALL";
  }
  onLogin() {
    this.authService.setLoginStatus(true);
  }
  onLogout() {
    this.authService.setLoginStatus(false);
  }

  ngOnInit() {
    this.authService.checkLoggedInStatus().subscribe((status: boolean) => {
      console.log(status);
      if (status) {
        this.logOut.nativeElement.style.display = "block";
        this.logIn.nativeElement.style.display = "none";
      } else {
        this.logOut.nativeElement.style.display = "none";
        this.logIn.nativeElement.style.display = "block";
      }
    });
  }

  ngAfterViewInit() {
    console.log("AfterViewInit");
    this.logOut.nativeElement.style.display = "none";
  }
}
