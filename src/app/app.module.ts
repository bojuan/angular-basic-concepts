import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VerifyCodePageComponent } from './components/pages/verify-code-page/verify-code-page.component';
import { CompaniesPageComponent } from './components/pages/companies-page/companies-page.component';
import { EditCompanyPageComponent } from './components/pages/edit-company-page/edit-company-page.component';
import { CreateCompanyPageComponent } from './components/pages/create-company-page/create-company-page.component';
import { CodesService } from './services/codes-service.service';
import { NavbarComponent } from './components/molecules/navbar/navbar.component';
import { MainLayoutComponent } from './components/templates/main-layout/main-layout.component';
import { CardComponent } from './components/molecules/card/card.component';
import { CompanyService } from './services/company-service.service';
import { ButtonComponent } from './components/atoms/button/button.component';
import { FormCompanyComponent } from './components/organims/form-company/form-company.component';

@NgModule({
  declarations: [
    AppComponent,
    VerifyCodePageComponent,
    CompaniesPageComponent,
    EditCompanyPageComponent,
    CreateCompanyPageComponent,
    NavbarComponent,
    MainLayoutComponent,
    CardComponent,
    ButtonComponent,
    FormCompanyComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [CodesService, CompanyService],
  bootstrap: [AppComponent],
})
export class AppModule {}
