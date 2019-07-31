import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-baitap4-laptopitem",
  templateUrl: "./baitap4-laptopitem.component.html",
  styleUrls: ["./baitap4-laptopitem.component.scss"]
})
export class Baitap4LaptopitemComponent implements OnInit {
  @Input()
  Laptop;
  constructor() {}

  ngOnInit() {}
}
