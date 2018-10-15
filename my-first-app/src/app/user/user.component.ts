import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  userName: string = "-";
  userStatus: string = "-";
  editOperationStatusMessage: string = "-"
  showEditOperationStatusMessageFlag: boolean = false;

  getUserName(): string {
    return this.userName;
  }

  getUserStatus(): string {
    return this.userStatus;
  }

  getUserStatusColor(): string {
    return this.getUserStatus() === "ONLINE" ? "green" : "red";
  }

  getStatus(): boolean {
    return this.getUserStatus() === "ONLINE" ? true : false;
  }

  getShowEditOperationStatusMessageFlag(): boolean {
    return this.showEditOperationStatusMessageFlag;
  }

  getEditOperationStatusMessage(): string {
    return this.editOperationStatusMessage;
  }

  constructor() {
    console.log("UserComponent::constructor()");
    this.userName = "FOOBAR";
    this.userStatus = Math.random() > 0.5 ? "ONLINE" : "OFFLINE";
    this.showEditOperationStatusMessageFlag = false;
    this.editOperationStatusMessage = "";
  }

  ngOnInit() {
    console.log("UserComponent::ngOnInit()");
  }

  onUserEditBtnClick() {
    this.showEditOperationStatusMessageFlag = true;
    this.editOperationStatusMessage = "Use was updated successfully!";
  }

}
