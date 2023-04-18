import { Component, OnInit } from '@angular/core';

import { CurriculumVitaeService } from '../../services/curriculum-vitae.service';

@Component({
  selector: 'goldfish-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  public get curriculumVitaeService(): CurriculumVitaeService {
    return this._curriculumVitaeService
  }

  constructor(
    private _curriculumVitaeService: CurriculumVitaeService
  ) {}

  ngOnInit() {

  }
}
