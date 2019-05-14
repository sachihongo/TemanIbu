import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListpackagePage } from './listpackage.page';

describe('ListpackagePage', () => {
  let component: ListpackagePage;
  let fixture: ComponentFixture<ListpackagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListpackagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListpackagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
