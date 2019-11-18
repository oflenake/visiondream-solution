import { Component, OnInit } from '@angular/core';
import { VDBuildVersionModel } from 'projects/visiondream-site/src/app/shared/models/vd-buildversion-model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // Properties
  VDBuildVersionModel: VDBuildVersionModel;

  // Constructor
  constructor() {
    this.VDBuildVersionModel = new VDBuildVersionModel();
  }

  // Initialize
  ngOnInit() {
  }

  // Method Function - executeSelectedChange method function that logs 
  // to the console the index number of the selected mat-tab.
  public executeSelectedChange = (event) => {
    console.log(event);
  }

}
