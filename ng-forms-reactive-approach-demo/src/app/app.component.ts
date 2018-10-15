import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  genders = [
    {
      value: "M",
      desc: "Male"
    },
    {
      value: "F",
      desc: "Female"
    }
  ];
}
