import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsComponent } from './students/students.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms"
import {MatBadge} from '@angular/material/badge';
import { FirstComponent } from './first/first.component'
import { UsdToPkrPipe } from '../pipes/usd-to-pkr.pipe';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ChangeElDirective } from '../change-el.directive';



@NgModule({
  declarations: [
    UsdToPkrPipe,
    StudentsComponent,
    FirstComponent,
    ReactiveFormComponent,
    ChangeElDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatBadge,
    ReactiveFormsModule
  ],
  exports:[
    StudentsComponent,
    FirstComponent,
    ReactiveFormComponent

  ]
})
export class HomeCodeModule { }
