import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editar-eliminar-curso',
  templateUrl: './editar-eliminar-curso.component.html',
  styleUrls: ['./editar-eliminar-curso.component.css']
})
export class EditarEliminarCursoComponent {

  public curso = {
    nombre: "INTRO A LA INGEN D SISTEM",
    materia: "2508120",
    nivel: "1",
    creditos: "1",
    hp: "0",
    he: "0",
    ht: "0",
    htp: "2",
    correquisitos: "Corr Intro Ing.",
    prerrequisitos: "Prerr Intro Ing."
  }
  public cursos =[{codigo:"1221", nombre:"viva la u"},
  {codigo:"1223", nombre:"introduccion"}];
}
