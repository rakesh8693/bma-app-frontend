import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DataService } from '../data.service';
import { GroupService } from '../group.service';
import { Cardview } from '../models/Cardview';
import { Group } from '../models/Group';

@Component({
  selector: 'app-groupview',
  templateUrl: './groupview.component.html',
  styleUrls: ['./groupview.component.css']
})
export class GroupviewComponent implements OnInit {
  group: Group;
  groupList = [
    { id: 1, name: 'TRIBE' },
    { id: 2, name: 'FEATURETEAM' },
    { id: 3, name: 'APPLICATION' },
    { id: 4, name: 'PLATFORMS' }
  ];
  groupNameList = [];
  cards: Cardview[];

  constructor(private groupService: GroupService, private toastr: ToastrService, private dataService: DataService,
    private router: Router) { }

  ngOnInit() {
    this.group = new Group;
  }

  doUpdate($event, card) {
    this.dataService.card = card;
    this.router.navigate(['/updatecard']);
  }

  doretrive() {
    this.groupService.getCardByGroupCategory(this.group).subscribe((data: any) => {
      this.cards = data;
      if (this.cards.length === 0) {
        this.toastr.info('No Card belongs to selected group', '', {
          timeOut: 3000,
          positionClass: 'toast-top-center'
        });
      }
    });
  }

  onSetGrpName(grpname) {
    this.group.groupname = grpname;
  }

  onChange(grpCat) {
    this.group.groupCategory = grpCat;
    this.groupService.get(this.group.groupCategory).subscribe((data: any) => {
      this.groupNameList = data;
      if (this.groupNameList.length === 0) {
        this.toastr.info('No group exits for the selected Group Category', '', {
          timeOut: 3000,
          positionClass: 'toast-top-center'
        });
      }
    });
  }

}
