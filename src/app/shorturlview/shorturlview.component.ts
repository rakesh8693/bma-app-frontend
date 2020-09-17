import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Shorturlview } from '../models/shorturlview';
import { ShorturlService } from '../shorturl.service';


@Component({
  selector: 'app-shorturlview',
  templateUrl: './shorturlview.component.html',
  styleUrls: ['./shorturlview.component.css']
})
export class ShorturlviewComponent implements OnInit {
  shorturl:Shorturlview[];

  constructor(private shortUrlService:ShorturlService,private router:Router) { }
  
  ngOnInit() {
    
    this.shortUrlService.get().subscribe((data:any) => {
      console.log("data----->"+data);
      this.shorturl = data;
    });
  }

  doCreate(event,id){
    console.log("shorturlid----->"+id)
    this.router.navigate(["/card",id])
  }

  doShare(event,id){
    console.log("shareicon----->"+id)
    this.shortUrlService.share(id).subscribe(response=>{
      let blob:any = new Blob([response], { type: 'text/csv' });
      const url = window.URL.createObjectURL(blob);
      window.open(url);
    });
  }

  doRedirect(event,url){
    console.log("shareicon----->"+url)
    window.location.href=url;
    window.open(window.location.href,"_blank");
  }

}
