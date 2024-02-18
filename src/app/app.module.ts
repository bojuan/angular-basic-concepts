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

@NgModule({
  declarations: [
    AppComponent,
    VerifyCodePageComponent,
    CompaniesPageComponent,
    EditCompanyPageComponent,
    CreateCompanyPageComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [CodesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
