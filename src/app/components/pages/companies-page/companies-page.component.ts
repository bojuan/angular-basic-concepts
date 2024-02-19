import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompanyService } from 'src/app/services/company-service.service';
import { CardData } from 'src/interfaces/card.interfaces';

@Component({
  selector: 'app-companies-page',
  templateUrl: './companies-page.component.html',
  styleUrls: ['./companies-page.component.scss'],
})
export class CompaniesPageComponent implements OnInit {
  cards: CardData[] = [];

  constructor(private companyService: CompanyService, private router: Router) {}

  ngOnInit(): void {
    this.companyService.getCompanies().subscribe((resp) => {
      this.cards = resp;
    });
  }

  handleEditCard(id: number) {
    console.log("Click edit")
    this.router.navigate(['companies', 'edit', id]);
  }
}
