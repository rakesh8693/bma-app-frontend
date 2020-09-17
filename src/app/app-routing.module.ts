import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { CardvalidateComponent } from './cardvalidate/cardvalidate.component';
import { CardviewComponent } from './cardview/cardview.component';
import { GroupComponent } from './group/group.component';
import { GroupviewComponent } from './groupview/groupview.component';
import { LoginComponent } from './login/login.component';
import { ModifyComponent } from './modify/modify.component';
import { NavComponent } from './nav/nav.component';
import { RouteGuardService } from './route-guard.service';
import { ShorturlComponent } from './shorturl/shorturl.component';
import { ShorturlviewComponent } from './shorturlview/shorturlview.component';
import { SingupComponent } from './singup/singup.component';

const routes: Routes = [
  { path: "", component: NavComponent },
  { path: "login", component: LoginComponent },
  { path: "nav", component: NavComponent },
  { path: "create", component: SingupComponent},
  { path: "shorturl", component: ShorturlComponent, canActivate:[RouteGuardService]  },
  { path: "card/:id", component: CardComponent, canActivate:[RouteGuardService] },
  { path: "cardview", component: CardviewComponent, canActivate:[RouteGuardService] }, 
  { path: "shorturlview", component: ShorturlviewComponent, canActivate:[RouteGuardService]  },
  { path: "group/:id", component: GroupComponent, canActivate:[RouteGuardService] },
  { path: "groupview", component: GroupComponent, canActivate:[RouteGuardService] },
  { path: "groupcard/view", component: GroupviewComponent, canActivate:[RouteGuardService] },
  { path: "validate/card", component: CardvalidateComponent, canActivate:[RouteGuardService] },
  { path: "updatecard", component: ModifyComponent, canActivate:[RouteGuardService] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
