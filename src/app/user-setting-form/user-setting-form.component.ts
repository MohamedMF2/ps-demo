import { Component, OnInit } from '@angular/core';
import { UserSettings } from '../data/user-setting';

@Component({
  selector: 'app-user-setting-form',
  templateUrl: './user-setting-form.component.html',
  styleUrls: ['./user-setting-form.component.css'],
})
export class UserSettingFormComponent implements OnInit {
  userSetting: UserSettings = {
    name: 'milton',
    emailOffers: true,
    interfaceStyle: 'dark',
    notes: 'Here are some notes',
    subscriptionType:'Annual'
  };
  constructor() {}

  ngOnInit(): void {}
}
