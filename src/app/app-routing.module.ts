import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VerifyCodePageComponent } from './components/pages/verify-code-page/verify-code-page.component';
import { CompaniesPageComponent } from './components/pages/companies-page/companies-page.component';
import { EditCompanyPageComponent } from './components/pages/edit-company-page/edit-company-page.component';
import { CreateCompanyPageComponent } from './components/pages/create-company-page/create-company-page.component';
import { MainLayoutComponent } from './components/templates/main-layout/main-layout.component';

const routes: Routes = [
  { path: 'verify-code', component: VerifyCodePageComponent },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', redirectTo: 'companies', pathMatch: 'full' },
      {
        path: 'companies',
        component: CompaniesPageComponent,
      },
      { path: 'companies/edit/:id', component: EditCompanyPageComponent },
      { path: 'companies/create', component: CreateCompanyPageComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
