import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { DataService } from '../data/data.service';
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

  constructor(private dataService: DataService) { }

  ngOnInit(): void { }

  onSubmit(form: NgForm) {
    console.log(`in on submit `, form.valid);
    this.dataService.postUserSettingsForm(this.userSettings).subscribe({
      next: result => console.log('success', result),
      error: error => console.log('error', error),
    })
  }

  onBlur(field: NgModel) {
    console.log(`in onBlur`, field.valid);
  }
}
