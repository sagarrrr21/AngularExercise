import { Component } from '@angular/core';
import { Form, FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../home-component/home-component';
import { from } from 'rxjs';

@Component({
  selector: 'app-contact-component',
  imports: [FormsModule, CommonModule, HomeComponent],
  templateUrl: './contact-component.html',
  styleUrl: './contact-component.css',
})
export class ContactComponent {
  name: string = '';
  email: string = '';
  phone: string = '';
  message: string = '';

  onSubmit(form: NgForm) {
    const x = form.value;
    console.log(typeof x);
    console.log('Form Data:', form.value);
  }
}
