import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LifetestComponent } from './lifetest.component';

describe('LifetestComponent', () => {
  let component: LifetestComponent;
  let fixture: ComponentFixture<LifetestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LifetestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LifetestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
