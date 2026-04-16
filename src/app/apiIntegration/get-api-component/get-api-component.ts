import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-get-api-component',
  imports: [],
  templateUrl: './get-api-component.html',
  styleUrl: './get-api-component.css',
})
export class GetApiComponent {
  // http = inject(HttpClient);
  userList: any[] = [];
  customerList: any[] = [];
  constructor(private http: HttpClient) {}

  getAllUser() {
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((res: any) => {
      this.userList = res;
      console.log(this.userList);
    });
  }

  getAllCustomer() {
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((res: any) => {
      this.customerList = res.data;
    });
  }
}
