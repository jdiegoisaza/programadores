import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InsertarCursoComponent } from './insertar-curso/insertar-curso.component';

@NgModule({
  declarations: [
    AppComponent,
    InsertarCursoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
