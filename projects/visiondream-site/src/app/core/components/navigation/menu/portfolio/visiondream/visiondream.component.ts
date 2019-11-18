import { Component, OnInit } from '@angular/core';
import { VDBuildVersionModel } from 'projects/visiondream-site/src/app/shared/models/vd-buildversion-model';

@Component({
  selector: 'app-visiondream',
  templateUrl: './visiondream.component.html',
  styleUrls: ['./visiondream.component.scss']
})
export class VisionDreamComponent implements OnInit {

  // Properties
  VDBuildVersionModel: VDBuildVersionModel;

  // Constructor
  constructor() {
    this.VDBuildVersionModel = new VDBuildVersionModel();
  }

  // Initialize
  ngOnInit() {
  }

}
