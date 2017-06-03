import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DynamicTextComponent} from './dynamic-text.component';

describe('DynamicTextComponent', () => {
  let component: DynamicTextComponent;
  let fixture: ComponentFixture<DynamicTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
