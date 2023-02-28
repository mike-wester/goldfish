import { Component } from '@angular/core';
import { CvService } from '../services/cv.service';

@Component({
  selector: 'gf-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent {

  get cvService(): CvService { return this._cvService; }

  constructor(private _cvService: CvService) { }
}
