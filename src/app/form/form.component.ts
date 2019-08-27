import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../auth.service";
@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.css"]
})
export class FormComponent implements OnInit {
  constructor(private authService: AuthService) {}
  ngOnInit() {}

  @Output() eventClicked = new EventEmitter<Event>();
  filteredStatus = "";
  channels = ["ALL", "BBC", "FOX", "NBC"];

  changeHeading = (event: Event) => {
    this.eventClicked.emit(event);
  };
  filterData() {
    this.authService.setFilteredStatus(this.filteredStatus);
  }
}
