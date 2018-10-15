import { Component, OnInit, EventEmitter, Output, ElementRef, ViewChild } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  @Output() userCreated: EventEmitter<User> = new EventEmitter();

  @Output() userCreatedJson: EventEmitter<{ userName: string, userEmail: string }> = new EventEmitter();

  @ViewChild('userNameInput') userNameInput: ElementRef;

  @ViewChild('userEmailInput') userEmailInput: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  onAddUser(userNameInput: HTMLInputElement, userEmailInput: HTMLInputElement) {
    console.log("1. onAddUser : " + userNameInput.value + ", " + userEmailInput.value);
    var userName: string = userNameInput.value;
    var userEmail: string = userEmailInput.value;
    console.log("2. onAddUser : " + userName + ", " + userEmail);
    var user: User = new User(userName, userEmail);
    console.log("3. onAddUser user.name : " + user.name);
    console.log("4. onAddUser user.email : " + user.email);

    //Through ViewChild
    console.log("5. @ViewChild onAddUser userNameInput = " + this.userNameInput.nativeElement.value)
    console.log("6. @ViewChild onAddUser userEmailInput = " + this.userEmailInput.nativeElement.value)

    //Outputting event - way - 1
    //this.userCreated.emit(new User(userName, userEmail)); //TODO: gives user undefined error

    //Outputting event - way - 2
    this.userCreatedJson.emit({ userName: this.userNameInput.nativeElement.value, userEmail: this.userEmailInput.nativeElement.value });
  }

}
