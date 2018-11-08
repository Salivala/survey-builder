import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.scss']
})
export class SignInFormComponent implements OnInit {
  names = ['hayden'];
  namePattern = /^([a-zA-Z])((\d)|([a-zA-Z])){5,15}$/;
  usernameFormatMessage = 'Please enter a username';
  validName = false;

  constructor() {
  }
  ngOnInit() {
  }

  checkValid($event) {
    const val = $event.target.value;
    const beginsWithNumber = /^\d/;
    const hasSpace = /^\S*$/;
    this.validName = false;
    if (beginsWithNumber.test(val)) {
      this.usernameFormatMessage = 'Username cannot begin with a number';
    } else if (val.length === 0) {
      this.usernameFormatMessage = 'Please enter a username';
    } else if (val.length > 0 && val.length < 6) {
      this.usernameFormatMessage = 'Username too short';
    } else if (!hasSpace.test(val)) {
      this.usernameFormatMessage = 'Username cannot have spaces';
    } else if (!this.namePattern.test(val)) {
      this.usernameFormatMessage = 'Username formatting incorrect';
    } else {
      this.usernameFormatMessage = '';
      this.validName = true;
    }
  }
}
