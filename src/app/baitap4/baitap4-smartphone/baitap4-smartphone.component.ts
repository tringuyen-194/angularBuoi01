import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-baitap4-smartphone",
  templateUrl: "./baitap4-smartphone.component.html",
  styleUrls: ["./baitap4-smartphone.component.scss"]
})
export class Baitap4SmartphoneComponent implements OnInit {
  public arrSmartPhone: any = [
    {
      image: "assets/img/sp_iphoneX.png",
      prodName: "iPhone X",
      prodIntro:
        "iPhone X features a new all-screen design. Face ID, which makes your face your password"
    },
    {
      image: "assets/img/sp_note7.png",
      prodName: "Galaxy Note7",
      prodIntro:
        "The Galaxy Note7 comes with a perfectly symmetrical design for good reason"
    },
    {
      image: "assets/img/sp_vivo850.png",
      prodName: "Vivo",
      prodIntro:
        "A young global smartphone brand focusing on introducing perfect sound quality"
    },
    {
      image: "assets/img/sp_blackberry.png",
      prodName: "Blackberry",
      prodIntro:
        "A young global smartphone brand focusing on introducing perfect sound quality"
    }
  ];
  constructor() {}

  ngOnInit() {}
}
