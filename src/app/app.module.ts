import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { MoviesComponent } from './movies/movies.component';
import { HomeCodeModule } from './home-code/home-code.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatBadgeModule} from '@angular/material/badge'
import {MatButtonModule} from '@angular/material/button'
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { TodoModule } from './todo/todo.module';
import { MovieChildComponent } from './movie-child/movie-child.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    MoviesComponent,
    MovieChildComponent,
    // MatcomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HomeCodeModule,
    NgbModule,
    MatBadgeModule,
    MatButtonModule,
    MatSlideToggleModule,
    TodoModule,
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
