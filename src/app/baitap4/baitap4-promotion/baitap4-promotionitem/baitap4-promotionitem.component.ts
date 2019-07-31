import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-baitap4-promotionitem',
  templateUrl: './baitap4-promotionitem.component.html',
  styleUrls: ['./baitap4-promotionitem.component.scss']
})
export class Baitap4PromotionitemComponent implements OnInit {
  @Input()
  Promote;
  constructor() { }

  ngOnInit() {
  }

}
