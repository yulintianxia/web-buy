import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceTestComponent } from './price-test.component';

describe('PriceTestComponent', () => {
  let component: PriceTestComponent;
  let fixture: ComponentFixture<PriceTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PriceTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
