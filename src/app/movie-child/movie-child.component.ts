import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-movie-child',
  templateUrl: './movie-child.component.html',
  styleUrl: './movie-child.component.css'
})
export class MovieChildComponent {

@Input() item: string = '';
@Output() updateDataInChild = new EventEmitter<string>();

changeItem (){
  this.item = "Updated parent copy text in Child"
}

}
 