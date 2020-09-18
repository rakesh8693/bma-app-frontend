import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { CardComponent } from './card/card.component';
import { CardvalidateComponent } from './cardvalidate/cardvalidate.component';
import { CardviewComponent } from './cardview/cardview.component';
import { GroupComponent } from './group/group.component';
import { GroupviewComponent } from './groupview/groupview.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginService } from './login.service';
import { SingupService } from './singup.service';
import { ShorturlService } from './shorturl.service';
import { CardService } from './card.service';
import { GroupService } from './group.service';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule
      ],
      declarations: [
        AppComponent,
        CardComponent,
        CardvalidateComponent,
        CardviewComponent,
        GroupComponent,
        GroupviewComponent,
        LoginComponent
      ],
      providers: [LoginService, SingupService, ShorturlService, CardService, GroupService]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'bma'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('bma');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome To Bookmark and url shortening Application!');
  });
});
