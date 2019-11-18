import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from '../shared/shared.module';

import { HomeComponent } from './components/navigation/menu/home/home.component';
import { ServicesComponent } from './components/navigation/menu/services/services.component';
import { PortfolioComponent } from './components/navigation/menu/portfolio/portfolio.component';
import { VisionDreamComponent } from './components/navigation/menu/portfolio/visiondream/visiondream.component';
import { SowetoTutorComponent } from './components/navigation/menu/portfolio/soweto-tutor/soweto-tutor.component';
import { LcfGfiComponent } from './components/navigation/menu/portfolio/lcf-gfi/lcf-gfi.component';
import { ContactComponent } from './components/navigation/menu/contact/contact.component';
import { AboutComponent } from './components/navigation/menu/about/about.component';

import { SupportComponent } from './components/navigation/menu/support/support.component';
import { RegisterComponent } from './auth/components/register/register.component';
import { LoginComponent } from './auth/components/login/login.component';

import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';

// Icons - Brands
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

@NgModule({
  declarations: [
    HomeComponent,
    ServicesComponent,
    PortfolioComponent,
    VisionDreamComponent,
    SowetoTutorComponent,
    LcfGfiComponent,
    ContactComponent,
    AboutComponent,
    SupportComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    SharedModule,
    FontAwesomeModule
  ],
  exports: [
    MaterialModule,
    FlexLayoutModule,
    SharedModule
  ]
})
export class CoreModule {

  // Constructor
  constructor(library: FaIconLibrary) {
    // Add dynamic icons to the library for use
    library.addIcons(
      faFacebook, faTwitter, faGithub
    );
  }

}
