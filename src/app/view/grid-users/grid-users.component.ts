import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-grid-users',
  templateUrl: './grid-users.component.html',
  styleUrls: ['./grid-users.component.css']
})
export class GridUsersComponent implements OnInit {

  public usuarios:any = [] ;
  constructor( private httpClient : HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get('../../../assets/mockData/users.json').subscribe( info =>{
      /* console.log(info); */
     this.usuarios = info['users'];
   })
  }

}
