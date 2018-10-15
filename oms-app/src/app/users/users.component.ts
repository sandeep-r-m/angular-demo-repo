import { Component, OnInit } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: Array<User> = [new User("Sachin", "sachin@foobar.com"), new User("Rahul", "rahul@foobar.com")];

  usersJsonArray = [{ userName: "Hello", userEmail: "hello@foo.bar" }];

  constructor() {
    console.log("UsersComponent::constructor() called")
  }

  ngOnInit() {
    console.log("UsersComponent::ngOnInit() called")
  }

  onUserAdded(userData: User) {
    this.users.push(userData);
    console.log("UsersComponent::onUserAdded - " + this.users.length);
  }

  onUserAddedJson(userData: { userName: string, userEmail: string }) {
    console.log("UsersComponent::onUserAddedJson - ")
    console.log(userData)
    //this.users.push();
    this.usersJsonArray.push({ userName: userData.userName, userEmail: userData.userEmail })
    console.log("UsersComponent::onUserAdded - users.length = " + this.users.length);
    console.log("UsersComponent::onUserAdded - usersJsonArray.length = " + this.usersJsonArray.length);
  }

  onUserDeleted() {

  }

}
