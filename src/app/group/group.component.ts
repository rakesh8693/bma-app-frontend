import { Component, OnInit, ɵConsole } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { GroupService } from '../group.service';
import { Group } from '../models/Group';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {

  groupList = [];
  groupNameList=[];
  group:Group
  cardid:Number;
  notExists=false;
  

  constructor(private groupService:GroupService,private route: ActivatedRoute,private router:Router,private toastr:ToastrService) { }

  ngOnInit() {
    this.group=new Group;
    this.cardid=+this.route.snapshot.paramMap.get('id');
    this.groupList=[
      {id: 1, name: "TRIBE"},
      {id: 2, name: "FEATURETEAM"},
      {id: 3, name: "APPLICATION"},
      {id: 4, name: "PLATFORMS"}
    ];
  }

  doAdd(){
     this.groupService.addToGroup(this.cardid,this.group).subscribe((data:any) => {
      this.toastr.success('Added To Group Sucessfully','',{timeOut: 3000,
        positionClass: 'toast-top-center'})
        this.router.navigate(["/cardview"])    
    });
  }

  doCreate(){
    this.groupService.createGroup(this.group).subscribe((data:any) => {
      this.toastr.success('Group Created Sucessfully','',{timeOut: 3000,
        positionClass: 'toast-top-center'})
      this.router.navigate(["/cardview"])  
    });
  }

  onChange(grpCat){
    this.group.groupCategory=grpCat;
    this.groupService.get(this.group.groupCategory).subscribe((data:any) => {    
      this.groupNameList=data;
      if(this.groupNameList.length==0){
        this.notExists=true;
        this.toastr.error('No group exits for the selected Group Category Kindly Create New Group','',{timeOut: 3000,
          positionClass: 'toast-top-center'})
      }
    });
  }

  doCancel(){
    this.router.navigate(["/cardview"])
  }

  

}
