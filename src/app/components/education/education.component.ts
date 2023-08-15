import { Component } from '@angular/core';
import { CurriculumVitaeService } from 'src/app/services/curriculum-vitae.service';

@Component({
  selector: 'goldfish-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.less']
})
export class EducationComponent {
  public get curriculumVitaeService(): CurriculumVitaeService {
    return this._curriculumVitaeService
  }

  constructor(
    private _curriculumVitaeService: CurriculumVitaeService
  ) {}
}
