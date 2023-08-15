import { Component } from '@angular/core';
import { CurriculumVitaeService } from 'src/app/services/curriculum-vitae.service';

@Component({
  selector: 'goldfish-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.less']
})
export class AboutComponent {
  public get curriculumVitaeService(): CurriculumVitaeService {
    return this._curriculumVitaeService
  }

  constructor(
    private _curriculumVitaeService: CurriculumVitaeService
  ) {}
}
