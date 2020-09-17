import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CardService } from '../card.service';
import { GroupService } from '../group.service';
import { Cardview } from '../models/Cardview';
import { Group } from '../models/Group';

@Component({
  selector: 'app-cardvalidate',
  templateUrl: './cardvalidate.component.html',
  styleUrls: ['./cardvalidate.component.css']
})
export class CardvalidateComponent implements OnInit {

  group:Group;
  groupList = [
    {id: 1, name: "TRIBE"},
    {id: 2, name: "FEATURETEAM"},
    {id: 3, name: "APPLICATION"},
    {id: 4, name: "PLATFORMS"}
  ];
  groupNameList=[];
  cards:Cardview[];
  
  
  constructor(private cardService:CardService,private groupService:GroupService,private router:Router,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.group=new Group;
  }

  doretrive(){
    this.groupService.getCardToValidate(this.group).subscribe((data:any) => {
      this.cards = data;
      if(this.cards.length==0){
        this.toastr.info('No Card To Validate','',{timeOut: 3000,
          positionClass: 'toast-top-center'})
      }
    });
  }

  onSetGrpName(grpname){
    this.group.groupname=grpname;
  }

  doValidate($event,card){
    //this.router.navigate(["/group",id])
  }

  onChange(grpCat){
    this.group.groupCategory=grpCat;
    this.groupService.get(this.group.groupCategory).subscribe((data:any) => {    
      this.groupNameList=data;
      if(this.groupNameList.length==0){
        this.toastr.info('No group exits for the selected Group Category','',{timeOut: 3000,
          positionClass: 'toast-top-center'})
      }
    });
  }
}
