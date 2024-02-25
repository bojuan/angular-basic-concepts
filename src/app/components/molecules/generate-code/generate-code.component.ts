import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-generate-code',
  templateUrl: './generate-code.component.html',
  styleUrls: ['./generate-code.component.scss'],
})
export class GenerateCodeComponent {
  @Input() code?: string;
  @Output() generateCode = new EventEmitter();

  handleGenerateCode() {
    this.generateCode.emit();
  }
}
