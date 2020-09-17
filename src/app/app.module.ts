import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SingupComponent } from './singup/singup.component';
import { SingupService } from './singup.service';
import { ShorturlComponent } from './shorturl/shorturl.component';
import { CardComponent } from './card/card.component';
import { GroupComponent } from './group/group.component';
import { AdminComponent } from './admin/admin.component';
import { ShorturlService } from './shorturl.service';
import { CardService } from './card.service';
import { NavComponent } from './nav/nav.component';
import { ShorturlviewComponent } from './shorturlview/shorturlview.component';
import { CardviewComponent } from './cardview/cardview.component';
import { GroupService } from './group.service';
import { GroupviewComponent } from './groupview/groupview.component';
import { CardvalidateComponent } from './cardvalidate/cardvalidate.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModifyComponent } from './modify/modify.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SingupComponent,
    ShorturlComponent,
    CardComponent,
    GroupComponent,
    AdminComponent,
    NavComponent,
    ShorturlviewComponent,
    CardviewComponent,
    GroupviewComponent,
    CardvalidateComponent,
    ModifyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [LoginService,SingupService,ShorturlService,CardService,GroupService],
  bootstrap: [AppComponent]
})
export class AppModule { }
