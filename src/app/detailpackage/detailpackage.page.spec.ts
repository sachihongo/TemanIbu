import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailpackagePage } from './detailpackage.page';

describe('DetailpackagePage', () => {
  let component: DetailpackagePage;
  let fixture: ComponentFixture<DetailpackagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailpackagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailpackagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
