import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  public userShowTemplate: string ;
  constructor() {
    this.userShowTemplate = 'grid';
   }

  ngOnInit(): void {
  }

  setUserTemplate(element:string):void{
    this.userShowTemplate = element;
    console.log(this.userShowTemplate);
  }
}
