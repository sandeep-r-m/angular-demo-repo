import { Component, OnInit } from '@angular/core';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: Array<UserComponent> = [];

  constructor() {
    console.log("UsersComponent::constructor()");
  }

  ngOnInit() {
    console.log("UsersComponent::ngOnInit()");
  }

  onNewUserBtnClick() {
    this.users.push(new UserComponent());
    console.log(this.users.length)
  }

}
