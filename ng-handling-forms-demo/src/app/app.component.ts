import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'ng-handling-forms-demo';

  genders: Array<string> = ["Male", "Female"];

  //Another way to get user form object
  @ViewChild('f') submittedForm: NgForm;

  onSubmit(ngForm: NgForm) {
    console.log("Form is submitted!")
    console.log(ngForm);
    console.log(this.submittedForm);
  }

  onSuggesUsername() {

    const suggestedUserName = "imsuperuser";

    //1 Way to set for values
    /*
    this.submittedForm.setValue({
      userData: {
        username: "",
        email: "",
        gender: "Male"
      },
      secret: ""
    });
    */

    //2 To set specific field
    this.submittedForm.form.patchValue({ userData: { username: suggestedUserName } })
  }

  onResetForm() {
    this.submittedForm.reset();
  }
}
