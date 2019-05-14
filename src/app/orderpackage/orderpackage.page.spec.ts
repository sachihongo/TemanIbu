import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderpackagePage } from './orderpackage.page';

describe('OrderpackagePage', () => {
  let component: OrderpackagePage;
  let fixture: ComponentFixture<OrderpackagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderpackagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderpackagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
