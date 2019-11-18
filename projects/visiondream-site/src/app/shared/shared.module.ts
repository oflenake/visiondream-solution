import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { SuccessDialogComponent } from './dialogs/success-dialog/success-dialog.component';
import { ErrorDialogComponent } from './dialogs/error-dialog/error-dialog.component';
import { LogoutDialogComponent } from './dialogs/logout-dialog/logout-dialog.component';
import { GlobalDialogComponent } from './dialogs/global-dialog/global-dialog.component';
import { DatePickerDirective } from './directives/date-picker.directive';
import { RequiredLabelDirective } from './directives/required-label.directive';

@NgModule({
  declarations: [
    SuccessDialogComponent,
    ErrorDialogComponent,
    LogoutDialogComponent,
    GlobalDialogComponent,
    DatePickerDirective,
    RequiredLabelDirective
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule
  ],
  exports: [
    MaterialModule,
    FlexLayoutModule,
    SuccessDialogComponent,       // Export components:
    ErrorDialogComponent,        // Success and Error
    LogoutDialogComponent
  ],
  entryComponents: [              // Place dialog components inside 'entryComponents' array because they are not going
    SuccessDialogComponent,      // to use routing, nor app selector when calling these components. They are going to 
    ErrorDialogComponent,        // be used as template references for the dialog’s open() function and thus the need
    LogoutDialogComponent
  ]
})
export class SharedModule { }
