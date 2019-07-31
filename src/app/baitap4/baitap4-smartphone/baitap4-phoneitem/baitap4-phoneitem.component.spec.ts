import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Baitap4PhoneitemComponent } from './baitap4-phoneitem.component';

describe('Baitap4PhoneitemComponent', () => {
  let component: Baitap4PhoneitemComponent;
  let fixture: ComponentFixture<Baitap4PhoneitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Baitap4PhoneitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Baitap4PhoneitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
