import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-post-api-component',
  imports: [FormsModule],
  templateUrl: './post-api-component.html',
  styleUrl: './post-api-component.css',
})
export class PostApiComponent {
  deptObj: any = {
    departmentId: 0,
    departmentName: '',
    departmentLogo: '',
  };

  http = inject(HttpClient);

  onSave() {
    this.http
      .post('', 'https://jsonplaceholder.typicode.com/users', this.deptObj)
      .subscribe((res: any) => {
        if (res) {
          alert('Department Created');
        } else {
          alert(res.message);
        }
      });
  }
}
