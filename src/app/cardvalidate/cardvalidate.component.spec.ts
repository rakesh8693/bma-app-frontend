import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardvalidateComponent } from './cardvalidate.component';

describe('CardvalidateComponent', () => {
  let component: CardvalidateComponent;
  let fixture: ComponentFixture<CardvalidateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CardvalidateComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardvalidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


});
