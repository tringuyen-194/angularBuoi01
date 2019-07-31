import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Baitap4LaptopitemComponent } from './baitap4-laptopitem.component';

describe('Baitap4LaptopitemComponent', () => {
  let component: Baitap4LaptopitemComponent;
  let fixture: ComponentFixture<Baitap4LaptopitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Baitap4LaptopitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Baitap4LaptopitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
