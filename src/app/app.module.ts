import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule, Router } from '@angular/router';

import { AppComponent } from './app.component';
import { EditarEliminarCursoComponent } from './editar-eliminar-curso/editar-eliminar-curso.component';

import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'eliminar', component: EditarEliminarCursoComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    EditarEliminarCursoComponent,
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
