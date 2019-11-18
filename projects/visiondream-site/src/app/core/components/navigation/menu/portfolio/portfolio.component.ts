import { Component, OnInit } from '@angular/core';
import { VDBuildVersionModel } from 'projects/visiondream-site/src/app/shared/models/vd-buildversion-model';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  VDBuildVersionModel: VDBuildVersionModel;

  constructor() {
    this.VDBuildVersionModel = new VDBuildVersionModel();
  }

  ngOnInit() {
  }

}
