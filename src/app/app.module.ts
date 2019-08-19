import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule, Router } from '@angular/router';

import { AppComponent } from './app.component';
import { InsertarCursoComponent } from './insertar-curso/insertar-curso.component';

const routes: Routes = [
  { path: '', component: InsertarCursoComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    InsertarCursoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }
