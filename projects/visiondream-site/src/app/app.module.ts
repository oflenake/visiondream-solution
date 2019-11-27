/**
 * @license
 * Copyright VisionDream ICT Solutions 2019. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at http://visiondream.local/#/legal/terms
 */

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { RoutingModule } from './routing/routing.module';
import { LoggerModule } from 'ngx-logger';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { LayoutComponent } from './core/components/appShell/layout/layout.component';
import { HeaderComponent } from './core/components/appShell/header/header.component';
import { TopNavComponent } from './core/components/navigation/top-nav/top-nav.component';
import { SideNavComponent } from './core/components/navigation/side-nav/side-nav.component';

import { BodyComponent } from './core/components/appShell/body/body.component';
import { FooterComponent } from './core/components/appShell/footer/footer.component';
import { PrivacyComponent } from './public/pages/legal/privacy/privacy.component';
import { TermsComponent } from './public/pages/legal/terms/terms.component';
import { NotFoundComponent } from './public/pages/errors/not-found/not-found.component';
import { ServerErrorComponent } from './public/pages/errors/server-error/server-error.component';

// Icons - Brands
//import { faFlag, faUser as regularUser } from '@fortawesome/free-regular-svg-icons';
//import { faFacebook, faUser as regularUser } from '@fortawesome/free-regular-svg-icons';

// Icons - Generic
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

import { faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { faCaretLeft } from '@fortawesome/free-solid-svg-icons';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';

import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faArchive } from '@fortawesome/free-solid-svg-icons';
import { faAsterisk } from '@fortawesome/free-solid-svg-icons';

// Icons - Footer
import { faBalanceScale } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faUserSecret } from '@fortawesome/free-solid-svg-icons';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

// Icons - Main Navigation
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { faQuestion } from '@fortawesome/free-solid-svg-icons';
import { faWrench } from '@fortawesome/free-solid-svg-icons';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { faCogs } from '@fortawesome/free-solid-svg-icons';

// Icons - Side Navigation (includes: vdFaEnvelope, vdFaUser, vdFaSignInAlt)
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faClipboardList } from '@fortawesome/free-solid-svg-icons';
import { faProjectDiagram } from '@fortawesome/free-solid-svg-icons';
import { faSort } from '@fortawesome/free-solid-svg-icons';

// Icons - Brands
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
//import { faFacebook as farFacebook } from '@fortawesome/free-regular-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
//import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
//import { faGithub } from '@fortawesome/free-brands-svg-icons';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    TopNavComponent,
    SideNavComponent,
    BodyComponent,
    FooterComponent,
    PrivacyComponent,
    TermsComponent,
    NotFoundComponent,
    ServerErrorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FontAwesomeModule,
    CoreModule,
    SharedModule,
    RoutingModule,
    LoggerModule.forRoot({
      //serverLoggingUrl: `${environment.SERVER_API_URL}/api/logs`,
      serverLoggingUrl: `${'http://localhost:44340'}/api/logs`,
      level: environment.logLevel,
      serverLogLevel: environment.serverLogLevel,
      disableConsoleLogging: false
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  // Constructor
  constructor(library: FaIconLibrary) {
    // Adding dynamic icons to library for use
    library.addIcons(
      faAngleUp, faAngleDown, faAngleLeft, faAngleRight, faCaretUp, faCaretDown, faCaretLeft, faCaretRight,
      faMapMarkerAlt, faArchive, faAsterisk, faBalanceScale, faPlus, faUserSecret, faCircle, faBars, faEnvelope,
      faUser, faUserCircle, faSignInAlt, faQuestion, faWrench, faCog, faCogs, faHome, faClipboardList, faProjectDiagram,
      faSort, faFacebook, faTwitter, faGithub
    );
  }

}
