import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Shorturl } from '../models/shorturl';
import { ShorturlService } from '../shorturl.service';

@Component({
  selector: 'app-shorturl',
  templateUrl: './shorturl.component.html',
  styleUrls: ['./shorturl.component.css']
})
export class ShorturlComponent implements OnInit {

  shorturl: Shorturl;

  constructor(private shortUrlService: ShorturlService, private router: Router, private toastr: ToastrService) { }

  ngOnInit() {
    this.shorturl = new Shorturl();
  }

  doCreate() {
    const response = this.shortUrlService.create(this.shorturl);
    response.subscribe(data => {
      this.shorturl.longurl = '';
      this.shorturl.expiryDate = new Date();
      this.toastr.success('Short Url Created Sucessfully', '', {
        timeOut: 3000,
        positionClass: 'toast-top-center'
      });
    });
  }

}
