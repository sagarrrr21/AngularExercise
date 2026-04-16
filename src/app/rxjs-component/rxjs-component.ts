import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import { map } from 'rxjs';

@Component({
  selector: 'app-rxjs-component',
  imports: [CommonModule],
  templateUrl: './rxjs-component.html',
  styleUrl: './rxjs-component.css',
})
export class RxjsComponent {
  data: number[] = [];

  array1 = [1, 2, 3, 4, 5];
  array2 = ['a', 'b', 'c', 'd', 'e'];

  //observable or EvenEmmiter
  // myObs = new Observable<number>((observer) => {
  //   setTimeout(() => {
  //     observer.next(1);
  //   }, 1000);
  //   setTimeout(() => {
  //     observer.next(2);
  //   }, 2000);
  //   setTimeout(() => {
  //     observer.next(3);
  //   }, 3000);
  //   // setTimeout(() => {
  //   //   observer.error(new Error('error something went wrong....'));
  //   // }, 3000);
  //   setTimeout(() => {
  //     observer.next(4);
  //   }, 4000);
  //   setTimeout(() => {
  //     observer.next(5);
  //   }, 5000);
  //   setTimeout(() => {
  //     observer.complete();
  //   }, 6000);
  // });

  // myObservable = of(this.array1, this.array2, 20, 30, 'hello', true);
  promiseData = new Promise((resolve, reject) => {
    resolve([10, 20, 30, 40]);
  });
  // myObservable = from(this.array1);
  myObservable = from(
    [2, 3, 4, 5, 6].map((item) => {
      return item * 10;
    }),
  );

  TransformObs = this.myObservable.pipe(
    map((item) => {
      return item * 10;
    }),
  );

  GetData() {
    this.myObservable.subscribe({
      next: (val: any) => {
        this.data.push(val);
        console.log(val);
      },
      error(err) {
        alert(err.message);
      },
      complete() {
        alert('completed');
      },
    });
  }

  // GetData() {
  //   // Observer or EvenListener
  //   //subscribe(next, error, complete)
  //   // this.myObs.subscribe(
  //   //   (val: any) => {
  //   //     this.data.push(val);
  //   //   },
  //   //   (err) => {
  //   //     alert(err.message);
  //   //   },
  //   //   () => {
  //   //     alert('All The Data is Streamed');
  //   //   },
  //   // );

  //   this.myObs.subscribe({
  //     next: (val: number) => {
  //       this.data.push(val);
  //     },
  //     error(err) {
  //       alert(err.message);
  //     },
  //     complete() {
  //       alert('all the data is streamed');
  //     },
  //   });
  // }
}
