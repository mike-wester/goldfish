import { Component, OnInit } from '@angular/core';

import { CurriculumVitaeService } from '../../services/curriculum-vitae.service';

@Component({
  selector: 'goldfish-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.less']
})
export class BodyComponent implements OnInit {

  public get curriculumVitaeService(): CurriculumVitaeService {
    return this._curriculumVitaeService
  }

  constructor(
    private _curriculumVitaeService: CurriculumVitaeService
  ) {}

  ngOnInit() {

  }
}
