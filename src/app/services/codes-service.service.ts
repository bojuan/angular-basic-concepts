import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CodesService implements OnInit {
  code?: string;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    console.log('Aquiiii');
  }

  getCode() {
    this.http.get('http://localhost:8080/').subscribe((resp) => {
      console.log(resp);
    });
  }
}
