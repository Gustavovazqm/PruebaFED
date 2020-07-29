import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-table-users',
  templateUrl: './table-users.component.html',
  styleUrls: ['./table-users.component.css']
})
export class TableUsersComponent implements OnInit {

  public usuarios:any = [] ;
  constructor( private httpClient : HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get('../../../assets/mockData/users.json').subscribe( info =>{
       /* console.log(info); */
      this.usuarios = info['users'];
    })
  }

}
