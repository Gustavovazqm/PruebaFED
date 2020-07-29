import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {UsersComponent} from './view/users/users.component';

const routes: Routes = [
 {path: '', component: UsersComponent},
 {path: 'users' , component: UsersComponent},
 {path: '**', component: UsersComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
