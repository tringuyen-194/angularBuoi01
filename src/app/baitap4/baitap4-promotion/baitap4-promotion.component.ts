import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-baitap4-promotion",
  templateUrl: "./baitap4-promotion.component.html",
  styleUrls: ["./baitap4-promotion.component.scss"]
})
export class Baitap4PromotionComponent implements OnInit {
  public arrPromote = [
    { image: "assets/img/promotion_1.png" },
    { image: "assets/img/promotion_2.png" },
    { image: "assets/img/promotion_3.jpg" }
  ];
  constructor() {}

  ngOnInit() {}
}
