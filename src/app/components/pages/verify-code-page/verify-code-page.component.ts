import { Component } from '@angular/core';
import { CodesService } from 'src/app/services/codes-service.service';

@Component({
  selector: 'app-verify-code-page',
  templateUrl: './verify-code-page.component.html',
  styleUrls: ['./verify-code-page.component.scss']
})
export class VerifyCodePageComponent {
  constructor(private codesService: CodesService){}

  handleGenerateCode(){
    this.codesService.getCode()
  }
}
