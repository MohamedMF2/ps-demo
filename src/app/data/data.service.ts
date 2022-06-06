import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { UserSettings } from './user-setting';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private subscriptionTypes = ['one', 'two', 'three'];

  constructor(private http: HttpClient) { }

  getSubscriptionTypes(): Observable<string[]> {
    return of(['Monthly', 'Yearly', 'LifeTime']);
  }
  postUserSettingsForm(userSettings: UserSettings): Observable<any> {

    return this.http.post('https://putsreq.com/lPtHES0DUECbM0Jr0Q0J', userSettings);
    // return of(userSettings);
  }
}
