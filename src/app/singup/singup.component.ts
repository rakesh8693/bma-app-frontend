import { Component, OnInit } from '@angular/core';
import { SingupService } from '../singup.service';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent implements OnInit {

  user: User;

  constructor(private singupService: SingupService, private router: Router, private toastr: ToastrService) { }

  ngOnInit() {
    this.user = new User();
  }

  doCreate() {
    const response = this.singupService.create(this.user);
    response.subscribe(data => {
      console.log(data);
      this.toastr.success('User Created', '', {
        timeOut: 3000,
        positionClass: 'toast-top-center'
      });
      this.router.navigate(['/login']);
    }, error => this.handleError(error));
  }

  handleError(error) {
    this.toastr.error('User Name Already Exists', '', {
      timeOut: 3000,
      positionClass: 'toast-top-center'
    });
  }

}
