import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestingComComponent } from './testing-com.component';

describe('TestingComComponent', () => {
  let component: TestingComComponent;
  let fixture: ComponentFixture<TestingComComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestingComComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestingComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
