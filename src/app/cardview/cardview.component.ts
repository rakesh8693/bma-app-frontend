import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CardService } from '../card.service';
import { Cardview } from '../models/Cardview';

@Component({
  selector: 'app-cardview',
  templateUrl: './cardview.component.html',
  styleUrls: ['./cardview.component.css']
})
export class CardviewComponent implements OnInit {

  cards:Cardview[];

  constructor(private cardService:CardService,private router:Router) { }
  
  ngOnInit() {
    this.cardService.get().subscribe((data:any) => {
      this.cards = data;
    });
  }

  doAdd($event,id){
    this.router.navigate(["/group",id])
  }

}
