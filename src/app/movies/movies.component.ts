import { Component } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css'
})
export class MoviesComponent {
  movieData = "this string from movies parenet component to child"
  data:string = 'parent'
  updateData (value:string){
    this.data = value
  }


}
 