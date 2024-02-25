import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CodesService } from 'src/app/services/codes-service.service';

@Component({
  selector: 'app-verify-code-page',
  templateUrl: './verify-code-page.component.html',
  styleUrls: ['./verify-code-page.component.scss'],
})
export class VerifyCodePageComponent {
  constructor(private codesService: CodesService, private router: Router) {}
  code$ = this.codesService.code$;
  loading$ = this.codesService.loading$;

  valueInput = '';
  showErrorMessage = false

  handleGenerateCode() {
    this.codesService.getCode();
  }

  handleVerifyCode() {
    this.code$.subscribe((code) => {
      if (code === this.valueInput) {
        this.router.navigate(['/companies']);
      } else {
        this.showErrorMessage = true
      }
    });
  }
}
