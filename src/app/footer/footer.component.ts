import { Component } from "@angular/core";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.css"]
})
export class FooterComponent {
  footer = "footer";
  tagLine = "Powered by NewsAPI";
  constructor() {}
}
