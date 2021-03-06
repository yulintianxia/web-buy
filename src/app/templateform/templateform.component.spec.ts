import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateformComponent } from './templateform.component';

describe('TemplateformComponent', () => {
  let component: TemplateformComponent;
  let fixture: ComponentFixture<TemplateformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
