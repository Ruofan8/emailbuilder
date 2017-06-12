import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteTopComponent } from './note-top.component';

describe('NoteTopComponent', () => {
  let component: NoteTopComponent;
  let fixture: ComponentFixture<NoteTopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoteTopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
