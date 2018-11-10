import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.scss']
})
export class SignUpFormComponent implements OnInit {
  names: Array<string> = ['hayden', 'bill'];
  nameExists = false;

  constructor() { }

  ngOnInit() {
  }

  checkExists($events) {
    const name = $events.target.value;
    this.nameExists = this.names.indexOf(name) > -1;
  }

}
