import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Baitap4PromotionitemComponent } from './baitap4-promotionitem.component';

describe('Baitap4PromotionitemComponent', () => {
  let component: Baitap4PromotionitemComponent;
  let fixture: ComponentFixture<Baitap4PromotionitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Baitap4PromotionitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Baitap4PromotionitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
