import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { CardData } from 'src/interfaces/card.interfaces';

@Injectable({
  providedIn: 'root',
})
export class CompanyService {
  company: CardData[] = [];

  constructor(private http: HttpClient) {}

  getCompanies(): Observable<CardData[]> {
    return this.http
      .get<{ companies: CardData[] }>('http://localhost:8080/companies')
      .pipe(map((resp) => resp.companies));
  }

  getCompany(id: number): Observable<CardData> {
    return this.http
      .get<{ company: CardData }>(`http://localhost:8080/company/${id}`)
      .pipe(map((resp) => resp.company));
  }
}
