import { Component } from '@angular/core';
import { CurriculumVitaeService } from 'src/app/services/curriculum-vitae.service';

@Component({
  selector: 'goldfish-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.less']
})
export class ProjectsComponent {
  public get curriculumVitaeService(): CurriculumVitaeService {
    return this._curriculumVitaeService
  }

  constructor(
    private _curriculumVitaeService: CurriculumVitaeService
  ) {}
}
