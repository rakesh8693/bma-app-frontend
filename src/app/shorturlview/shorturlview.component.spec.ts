import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShorturlviewComponent } from './shorturlview.component';

describe('ShorturlviewComponent', () => {
  let component: ShorturlviewComponent;
  let fixture: ComponentFixture<ShorturlviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShorturlviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShorturlviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
