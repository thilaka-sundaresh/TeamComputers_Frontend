import { Component } from '@angular/core';

@Component({
  selector: 'order',
  templateUrl: 'order.html'
})
export class OrderComponent {

  text: string;

  constructor() {
    console.log('Hello OrderComponent Component');
    this.text = 'Hello World';
  }

}
