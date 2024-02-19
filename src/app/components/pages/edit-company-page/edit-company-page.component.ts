import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CompanyService } from 'src/app/services/company-service.service';
import { CardData } from 'src/interfaces/card.interfaces';

@Component({
  selector: 'app-edit-company-page',
  templateUrl: './edit-company-page.component.html',
  styleUrls: ['./edit-company-page.component.scss'],
})
export class EditCompanyPageComponent implements OnInit {
  companyId!: string;
  company: CardData | null = null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private companyService: CompanyService
  ) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (!id) {
      this.router.navigate(['companies']);
      return;
    }

    this.companyId = id;
    console.log('ID de la empresa:', this.companyId);

    this.companyService
      .getCompany(Number(this.companyId))
      .subscribe((companyRest) => {
        this.company = companyRest;
      });
  }
}
