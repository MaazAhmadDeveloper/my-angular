import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {
  testForm = new FormGroup({
    username : new FormControl('hello'),
    password : new FormControl('word')
  })

  loginUser(){
    console.log(this.testForm.value);
  }


}
