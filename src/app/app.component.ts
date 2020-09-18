import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bma';

  constructor(private router: Router) { }

  isUserLoggedIn() {
    const user = sessionStorage.getItem('userName');
    return !(user === null);
  }
  userLogOut() {
    sessionStorage.removeItem('id');
    sessionStorage.removeItem('userName');
    sessionStorage.removeItem('password');
    sessionStorage.removeItem('role');
    this.router.navigate(['/nav']);
  }
}
