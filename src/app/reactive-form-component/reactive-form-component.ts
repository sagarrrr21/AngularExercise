import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-component',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-form-component.html',
  styleUrl: './reactive-form-component.css',
})
export class ReactiveFormComponent {
  name = new FormControl();
  password = new FormControl();

  DisplayValue() {
    console.log(this.name.value + ' ' + this.password.value);
  }
}
