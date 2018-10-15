import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { UserDetail } from '../model/user-detail';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: Array<UserDetail> = [];

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.users = this.usersService.getUsers();
  }

}
