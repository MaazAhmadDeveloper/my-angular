import { Component } from '@angular/core';
import {NgForm} from "@angular/forms"

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrl: './students.component.css'
})
export class StudentsComponent {
  showFlag: boolean = false;
  student: any 

  // constructor(){  
  //   interface Student {
  //     username:string;
  //     email: string;
  //     password: string
  //   }
  // }

  getData(data: NgForm){
    console.log(data);
    this.student = data;
  }

  showFlaOpt(){
    this.showFlag = !this.showFlag;
  }

}
