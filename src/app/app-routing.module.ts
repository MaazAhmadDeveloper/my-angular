import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { MoviesComponent } from './movies/movies.component';
import { StudentsComponent } from './home-code/students/students.component';
import { TodoListComponent } from './todo/todo-list/todo-list.component';
import { FirstComponent } from './home-code/first/first.component';
import { ReactiveFormComponent } from './home-code/reactive-form/reactive-form.component';

const routes: Routes = [
  {path: "", redirectTo: "login", pathMatch: "full" },
  {path: "login",component: LoginComponent },
  {path: "home", component: HomeComponent },
  {path: "header", component: HeaderComponent },
  {path: "movies", component: MoviesComponent },
  {path: "students", component: StudentsComponent },
  {path: "pipes", component: FirstComponent },
  {path: "todo-list", component: TodoListComponent },
  {path: "forms", component: ReactiveFormComponent },
  {path: "**", component: HomeComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
