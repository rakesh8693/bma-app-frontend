import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { DataService } from '../data.service';
import { GroupService } from '../group.service';
import { Card } from '../models/card';
import { Cardview } from '../models/cardview';

@Component({
  selector: 'app-modify',
  templateUrl: './modify.component.html',
  styleUrls: ['./modify.component.css']
})
export class ModifyComponent implements OnInit {

  card: Card;
  cardView: Cardview;

  constructor(private groupService: GroupService, private dataService: DataService, private toastr: ToastrService) { }

  ngOnInit() {
    this.card = new Card;
    this.cardView = this.dataService.card;
    this.card.icon = 'assets/favicon.png';
  }

  doUpdate() {
    this.groupService.updateCard(this.cardView.id, this.card).subscribe((data: any) => {
      this.toastr.success('Request has to approved by admin', '', {
        timeOut: 3000,
        positionClass: 'toast-top-center'
      });
    });
  }

}
