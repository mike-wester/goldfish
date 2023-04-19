import { Component } from '@angular/core';

import { CurriculumVitaeService } from '../../services/curriculum-vitae.service';

@Component({
  selector: 'goldfish-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.less']
})
export class FooterComponent {

  public get curriculumVitaeService(): CurriculumVitaeService {
    return this._curriculumVitaeService
  }

  constructor(
    private _curriculumVitaeService: CurriculumVitaeService
  ) {}
}
