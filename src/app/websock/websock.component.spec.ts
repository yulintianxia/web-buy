import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsockComponent } from './websock.component';

describe('WebsockComponent', () => {
  let component: WebsockComponent;
  let fixture: ComponentFixture<WebsockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebsockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebsockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
