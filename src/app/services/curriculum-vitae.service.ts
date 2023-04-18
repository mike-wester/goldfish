import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurriculumVitaeService {

  public username = "John Doe";

  public get headers(): Observable<string[]> {
    return of(this._headers);
  }

  public get headerLinks(): Observable<any[]> {
    return of(this._headerLinks);
  }

  constructor() { }

  private _headers = [
    "About",
    "Experience",
    "Education",
    "Projects",
    "Skills",
    "Contacts"
  ]

  private _headerLinks = [
    { title: "Github", link: "https://github.com/mike-wester" },
    { title: "Github - Resume", link: "https://github.com/mike-wester/mike-wester.github.io" },
    { title: "Github - Angular ATM", link: "https://github.com/mike-wester/angular-atm" },
    { title: "Github - Goldfish", link: "https://github.com/mike-wester/goldfish" },
  ]
}
