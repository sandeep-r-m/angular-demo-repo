import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() navTabSelectedEvent = new EventEmitter<string>();

  constructor() {
    console.log("HeaderComponent::constructor() called");
  }

  ngOnInit() {
    console.log("HeaderComponent::ngOnInit() called");
  }

  onNavTabClick(navTabSelected: string) {
    console.log("HeaderComponent::onNavTabClick() called");
    console.log("navTabSelected = " + navTabSelected);

    //Publish an event to outside
    this.navTabSelectedEvent.emit(navTabSelected);

  }

}
