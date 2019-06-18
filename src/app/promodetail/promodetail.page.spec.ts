import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromodetailPage } from './promodetail.page';

describe('PromodetailPage', () => {
  let component: PromodetailPage;
  let fixture: ComponentFixture<PromodetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromodetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromodetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
