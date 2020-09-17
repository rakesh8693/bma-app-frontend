import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from '../login.service';
import { User } from '../models/user';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User;

  constructor(private loginservice: LoginService, private router: Router, private toastr: ToastrService) { }

  ngOnInit() {
    this.user = new User();
  }

  doLogin() {
    const res = this.loginservice.login(this.user.userName, this.user.password);
    res.subscribe(response => {
      sessionStorage.setItem('id', '' + response.id);
      sessionStorage.setItem('userName', response.userName);
      sessionStorage.setItem('password', response.password);
      sessionStorage.setItem('role', response.roleType);
      this.router.navigate(['/nav']);
    }, error => this.handleError(error));
  }

  handleError(error) {
    this.toastr.error('Create a User By Clicking Create Button', 'User DoesNot exists', {
      timeOut: 3000,
      positionClass: 'toast-top-center'
    });
  }

  doCreate() {
    this.router.navigate(['/create']);
  }

}
