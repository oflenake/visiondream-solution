import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from '../shared/shared.module';

import { HomeComponent } from './components/navigation/menu/home/home.component';
import { ServicesComponent } from './components/navigation/menu/services/services.component';
import { PortfolioComponent } from './components/navigation/menu/portfolio/portfolio.component';
import { ContactComponent } from './components/navigation/menu/contact/contact.component';
import { AboutComponent } from './components/navigation/menu/about/about.component';

import { SupportComponent } from './components/navigation/menu/support/support.component';
import { LoginComponent } from './auth/components/login/login.component';
import { RegisterComponent } from './auth/components/register/register.component';

@NgModule({
  declarations: [
    HomeComponent,
    ServicesComponent,
    PortfolioComponent,
    ContactComponent,
    AboutComponent,
    SupportComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    SharedModule
  ],
  exports: [
    MaterialModule,
    FlexLayoutModule,
    SharedModule
  ]
})
export class CoreModule { }
