import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-baitap4-phoneitem",
  templateUrl: "./baitap4-phoneitem.component.html",
  styleUrls: ["./baitap4-phoneitem.component.scss"]
})
export class Baitap4PhoneitemComponent implements OnInit {
  @Input()
  Phone;
  constructor() {}

  ngOnInit() {}
}
