import { Component } from '@angular/core';
import { CurriculumVitaeService } from 'src/app/services/curriculum-vitae.service';

@Component({
  selector: 'goldfish-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.less']
})
export class SkillsComponent {
  public get curriculumVitaeService(): CurriculumVitaeService {
    return this._curriculumVitaeService
  }

  constructor(
    private _curriculumVitaeService: CurriculumVitaeService
  ) {}
}
