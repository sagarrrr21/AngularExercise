import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-component',
  imports: [FormsModule],
  templateUrl: './contact-component.html',
  styleUrl: './contact-component.css',
})
export class ContactComponent {
  name: string = '';
  email: string = '';
  phone: string = '';
  message: string = '';
  
}
