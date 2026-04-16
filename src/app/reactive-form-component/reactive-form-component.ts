import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-component',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-form-component.html',
  styleUrl: './reactive-form-component.css',
})
export class ReactiveFormComponent {
  studentForm: FormGroup = new FormGroup({
    firstname: new FormControl(),
    lastname: new FormControl(),
    ciyt: new FormControl(),
  });
}
