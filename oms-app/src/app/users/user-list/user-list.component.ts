import { Component, OnInit, Input, OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input() user: User;

  @Input() userDetails: { userName: string, userEmail: string };

  constructor() {
    console.log("UserListComponent::constructor() called")
  }

  ngOnInit() {
    console.log("UserListComponent::ngOnInit() called")
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("UserListComponent::ngOnChanges() called")
    console.log(changes)
  }

  ngDoCheck(): void {
    console.log("UserListComponent::ngDoCheck() called")
  }

  ngAfterContentInit(): void {
    console.log("UserListComponent::ngAfterContentInit() called")
  }

  ngAfterContentChecked(): void {
    console.log("UserListComponent::ngAfterContentChecked() called")
  }

  ngAfterViewInit(): void {
    console.log("UserListComponent::ngAfterViewInit() called")
  }

  ngAfterViewChecked(): void {
    console.log("UserListComponent::ngAfterViewChecked() called")
  }

  ngOnDestroy(): void {
    console.log("UserListComponent::ngOnDestroy() called")
  }
}
