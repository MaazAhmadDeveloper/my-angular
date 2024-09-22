import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor () {
    interface User {
      name: string;
      email: string;
      phone: number
    }
    const users: User[] = [
      {name: "maaz", email: "maaz@gmail.com", phone: 1111},
      {name: "ahmad", email: "ahmad@gmail.com", phone: 2222},
      {name: "bilal", email: "bilal@gmail.com", phone: 3333},
      {name: "ibrahim", email: "ibrahim@gmail.com", phone: 4444},
    ]

    this.allUsers = users;
  }

  data: string = "hello"
  display: string = ""
  disable:boolean = true;
  ifElseFlag:boolean = true;
  allUsers

  inputreader (inpu: string): void{
    console.log(inpu);
  }

  getDisplayValue (val: string): void{
    this.display = val
  }

  func( val:string, inputText: string ): void{
    console.warn("function hitted with value: "+ val);
    this.inputreader(inputText)
  }

  disableFlag (){
    this.disable = !this.disable
  }

  ifElseFlagOpt (){
    this.ifElseFlag = !this.ifElseFlag
  }

  ngOnInit (){
    console.log("lifecycle oninit function invoked");
  }

}
