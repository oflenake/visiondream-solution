/**
 * @license
 * Copyright VisionDream ICT Solutions 2019. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at http://visiondream.local/#/legal/terms
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '../core/components/navigation/menu/home/home.component';
import { ServicesComponent } from '../core/components/navigation/menu/services/services.component';
import { PortfolioComponent } from '../core/components/navigation/menu/portfolio/portfolio.component';
import { VisionDreamComponent } from '../core/components/navigation/menu/portfolio/visiondream/visiondream.component';
import { SowetoTutorComponent } from '../core/components/navigation/menu/portfolio/soweto-tutor/soweto-tutor.component';
import { LcfGfiComponent } from '../core/components/navigation/menu/portfolio/lcf-gfi/lcf-gfi.component';
import { ContactComponent } from '../core/components/navigation/menu/contact/contact.component';
import { AboutComponent } from '../core/components/navigation/menu/about/about.component';

import { SupportComponent } from '../core/components/navigation/menu/support/support.component';
import { RegisterComponent } from '../core/auth/components/register/register.component';
import { LoginComponent } from '../core/auth/components/login/login.component';

import { TermsComponent } from '../public/pages/legal/terms/terms.component';
import { PrivacyComponent } from '../public/pages/legal/privacy/privacy.component';
import { NotFoundComponent } from '../public/pages/errors/not-found/not-found.component';
import { ServerErrorComponent } from '../public/pages/errors/server-error/server-error.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'services', component: ServicesComponent },

  { path: 'portfolio', component: PortfolioComponent },
  { path: 'portfolio/visiondream', component: VisionDreamComponent },
  { path: 'portfolio/soweto-tutor', component: SowetoTutorComponent },
  { path: 'portfolio/lcf-gfi', component: LcfGfiComponent },

  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent },

  { path: 'support', component: SupportComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },

  { path: 'legal/terms-of-service', component: TermsComponent },
  { path: 'legal/privacy-policy', component: PrivacyComponent },
  { path: '404', component: NotFoundComponent },
  { path: '500', component: ServerErrorComponent },

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/404', pathMatch: 'full' }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { useHash: true })
  ],
  exports: [RouterModule]
})
export class RoutingModule { }
