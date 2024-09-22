import { Component } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrl: './first.component.css'
})
export class FirstComponent {

  dataStr: string = 'hello world';
  dataNum: number = 320.20;
  currentDate: Date = new Date();
  myObject: any = {
    name: 'John',
    age: 30,
    email: 'john@example.com'
  };
  


}
