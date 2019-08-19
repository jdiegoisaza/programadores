import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule, Router } from '@angular/router';

import { AppComponent } from './app.component';
import { InsertarCursoComponent } from './insertar-curso/insertar-curso.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'insertar', component: InsertarCursoComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    InsertarCursoComponent,
    HomeComponent
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
