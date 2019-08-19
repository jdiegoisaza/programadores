import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-insertar-curso',
  templateUrl: './insertar-curso.component.html',
  styleUrls: ['./insertar-curso.component.css']
})
export class InsertarCursoComponent {

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
  };
}
