import {Component, EventEmitter, Output} from '@angular/core';
import {MatFormField, MatFormFieldModule} from "@angular/material/form-field";
import {
  MatDatepicker,
  MatDatepickerInput,
  MatDatepickerModule,
  MatDatepickerToggle
} from "@angular/material/datepicker";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatNativeDateModule} from "@angular/material/core";
import {MatInput} from "@angular/material/input";
import {MatButton} from "@angular/material/button";
import {CommonModule} from "@angular/common";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-newpost-modal',
  standalone: true,
  imports: [
    CommonModule,
    MatFormField,
    MatDatepickerToggle,
    MatDatepicker,
    ReactiveFormsModule,
    MatDatepickerInput,
    MatFormFieldModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatInput,
    MatButton,
    MatIcon
  ],
  templateUrl: './newpost-modal.component.html',
  styleUrl: './newpost-modal.component.css'
})
export class NewpostModalComponent {

  @Output() close = new EventEmitter<void>();

  form = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    subject: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    publication_date: new FormControl('', Validators.required)
  });

  submitForm() {
    if (this.form.valid) {
      console.log('OliBoli')
    }
  }

  onClose() {
    this.close.emit();
  }

}
