import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfodetailPage } from './infodetail.page';

describe('InfodetailPage', () => {
  let component: InfodetailPage;
  let fixture: ComponentFixture<InfodetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfodetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfodetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
