import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MateriaListComponent } from './materia-list/materia-list.component';


const routes: Routes = [
 
  {
    path: 'Materia-list',
    component:MateriaListComponent
  }
  
  
];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
