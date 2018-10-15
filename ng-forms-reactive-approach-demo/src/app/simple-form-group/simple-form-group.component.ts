import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-simple-form-group',
  templateUrl: './simple-form-group.component.html',
  styleUrls: ['./simple-form-group.component.css']
})
export class SimpleFormGroupComponent implements OnInit {

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

  signupForm: FormGroup;

  constructor() { }

  ngOnInit() {

    //this.signupForm = new FormGroup({}); // empty {} tells there are no controls in the form

    //Define controls in the form. Need to link these to html form.
    this.signupForm = new FormGroup({
      'username': new FormControl('superuser', Validators.required),
      'email': new FormControl('superuser@foobar.com', [Validators.required, Validators.email]),
      'gender': new FormControl('M', [Validators.required])
    });

  }

  onSubmit() {
    console.log(this.signupForm)
  }

}
