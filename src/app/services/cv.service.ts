import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CvService {

  constructor() { }

  public get sections():Observable<string[]> { return of(['About', 'Experience','Education','Projects','Skills','Contact'])};
  public get username():Observable<string> { return of('John Jane Doe')};

}
