import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-nested-form-group',
  templateUrl: './nested-form-group.component.html',
  styleUrls: ['./nested-form-group.component.css']
})
export class NestedFormGroupComponent implements OnInit {

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
      'userData': new FormGroup({
        'username': new FormControl('superuser-nested', Validators.required),
        'gender': new FormControl('F', [Validators.required])
      }),
      'email': new FormControl('superuser-nested@foobar.com', [Validators.required, Validators.email]),
      'hobbies': new FormArray([])
    });

  }

  onSubmit() {
    console.log(this.signupForm)
    //this.signupForm.reset();
  }

  onAddHobby() {
    const hobby = new FormControl('', Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(hobby);
  }

}
