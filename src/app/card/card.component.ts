import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CardService } from '../card.service';
import { DataService } from '../data.service';
import { GroupService } from '../group.service';
import { Card } from '../models/card';
import { Cardview } from '../models/Cardview';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  card: Card;
  cardId: Number;
  constructor(private cardService: CardService, private router: Router, private route: ActivatedRoute, private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.card = new Card();
    this.card.surlId = +this.route.snapshot.paramMap.get('id');
    this.card.icon = "assets/favicon.png";
  }

  doCreate() {
    let response = this.cardService.create(this.card)
    response.subscribe(data => {
      this.toastr.success('Card Created Sucessfully', '', {
        timeOut: 3000,
        positionClass: 'toast-top-center'
      })
      this.router.navigate(["/shorturlview"])
    }, error => this.handleError(error))
  }

  uploadIcon() {

  }

  handleError(error) {
    this.toastr.error('Create a User By Clicking Create Button', 'User DoesNot exists', {
      timeOut: 3000,
      positionClass: 'toast-top-center'
    })
  }

}
