import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lead } from './lead.component';

describe('Lead', () => {
  let component: Lead;
  let fixture: ComponentFixture<Lead>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lead ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lead);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
