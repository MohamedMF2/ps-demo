import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { UserSettings } from '../data/user-setting';

@Component({
  selector: 'app-user-setting-form',
  templateUrl: './user-setting-form.component.html',
  styleUrls: ['./user-setting-form.component.css'],
})
export class UserSettingFormComponent implements OnInit {
  originalUserSettings: UserSettings = {
    name: null,
    emailOffers: null,
    interfaceStyle: null,
    notes: null,
    subscriptionType: null,
  };

  userSettings: UserSettings = { ...this.originalUserSettings };

  constructor() {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    console.log(`in on submit `, form.valid);
  }

  onBlur(field: NgModel) {
    console.log(`in onBlur`, field.valid);
  }
}
