import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Baitap2ContactusComponent } from './baitap2-contactus.component';

describe('Baitap2ContactusComponent', () => {
  let component: Baitap2ContactusComponent;
  let fixture: ComponentFixture<Baitap2ContactusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Baitap2ContactusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Baitap2ContactusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
