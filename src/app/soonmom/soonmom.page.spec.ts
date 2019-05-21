import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoonmomPage } from './soonmom.page';

describe('SoonmomPage', () => {
  let component: SoonmomPage;
  let fixture: ComponentFixture<SoonmomPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoonmomPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoonmomPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
