import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CardData } from 'src/interfaces/card.interfaces';

@Component({
  selector: 'app-form-company',
  templateUrl: './form-company.component.html',
  styleUrls: ['./form-company.component.scss'],
})
export class FormCompanyComponent implements OnChanges {
  @Input() dataCompany?: CardData;
  @Output() submitForm = new EventEmitter<Omit<CardData, 'id'>>();
  @Output() cancelForm = new EventEmitter();

  companyForm = this.formBuilder.group({
    name: ['', Validators.required],
    email: ['', Validators.required, Validators.email],
    image: ['', Validators.required],
    year: [2024, Validators.required],
  });

  constructor(private formBuilder: FormBuilder) {}
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['dataCompany']?.currentValue) {
      const { id, ...dataForm } = changes['dataCompany'].currentValue;
      this.companyForm.setValue(dataForm);
    }
  }

  handleSubmit() {
    console.log(this.getData)
    if (this.companyForm.valid) {
      this.submitForm.emit(this.getData);
    }
  }

  get getData() {
    return this.companyForm.getRawValue() as CardData;
  }
}
