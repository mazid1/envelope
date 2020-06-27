import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

// todo validation break sometimes. I'll fix it later.

  name = new FormControl('', [Validators.required, Validators.minLength(1)]);
  email = new FormControl('', [Validators.required, Validators.email]);
  subject = new FormControl('', [Validators.required, Validators.minLength(1)]);
  message = new FormControl('', [Validators.required, Validators.minLength(1)]);

  getEmailErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  getGeneralErrorMessage(property) {
    if (property.hasError('required')) {
      return 'You must enter a value';
    }
  }

  send() {
    console.log('Name: ' + this.name.value + ' Email ' + this.email.value + ' Subject ' + this.subject.value + ' Message ' + this.message.value);
  }
}
