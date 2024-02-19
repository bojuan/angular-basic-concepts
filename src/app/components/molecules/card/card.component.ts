import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CardData } from 'src/interfaces/card.interfaces';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() cardData?: CardData
  @Output() clickEdit = new EventEmitter<number>()
  @Output() clickDelete = new EventEmitter<number>()

  handleClickEdit() {
    this.clickEdit.emit()
  }

  handleClickDelete() {
    this.clickDelete.emit()
  }
}
