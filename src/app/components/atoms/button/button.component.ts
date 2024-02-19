import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() variant: "primary" | "secondary" = "primary"
  @Output() clickButton = new EventEmitter()

  handleClick(){
    this.clickButton.emit()
  }
}
