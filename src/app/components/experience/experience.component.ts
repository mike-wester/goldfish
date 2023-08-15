import { Component } from '@angular/core';
import { CurriculumVitaeService } from 'src/app/services/curriculum-vitae.service';

@Component({
  selector: 'goldfish-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.less']
})
export class ExperienceComponent {
  public get curriculumVitaeService(): CurriculumVitaeService {
    return this._curriculumVitaeService
  }

  constructor(
    private _curriculumVitaeService: CurriculumVitaeService
  ) {}
}
