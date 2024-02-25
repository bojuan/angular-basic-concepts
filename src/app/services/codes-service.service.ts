import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CodesService {
  private code = new BehaviorSubject<string | undefined>(undefined);
  code$ = this.code.asObservable();

  private loading = new BehaviorSubject<boolean>(false);
  loading$ = this.loading.asObservable();

  constructor(private http: HttpClient) {}

  getCode() {
    this.loading.next(true);
    this.http
      .get<{ code: string }>('http://localhost:8080/code')
      .subscribe((resp) => {
        this.code.next(resp.code);
        this.loading.next(false);
      });
  }
}
