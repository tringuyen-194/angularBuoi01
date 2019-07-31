import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-baitap4-laptop",
  templateUrl: "./baitap4-laptop.component.html",
  styleUrls: ["./baitap4-laptop.component.scss"]
})
export class Baitap4LaptopComponent implements OnInit {
  public arrLaptopList = [
    {
      image: "assets/img/lt_macbook.png",
      prodName: "MACBOOK",
      prodIntro:
        "The MacBook is a brand of notebook computers manufactured by Apple Inc"
    },
    {
      image: "assets/img/lt_rog.png",
      prodName: "ASUS ROG",
      prodIntro:
        "the Asus ROG Strix Flare is the latest addition to Asus' lineup of ROG branded devices"
    },
    {
      image: "assets/img/lt_hp.png",
      prodName: "HP OMEN",
      prodIntro:
        "A young global smartphone brand focusing on introducing perfect sound quality"
    },
    {
      image: "assets/img/lt_lenovo.png",
      prodName: "LENOVO THINKPAD",
      prodIntro:
        "The ThinkPad X1 Carbon is a high-end notebook computer released by Lenovo in 2012"
    }
  ];

  constructor() {}

  ngOnInit() {}
}
