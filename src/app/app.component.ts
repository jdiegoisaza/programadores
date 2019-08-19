import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public cursos;

  constructor() {
    this.cursos = [
      {
        nombre: "INTRO A LA INGEN D SISTEM",
        materia: "2508120",
        nivel: "1",
        creditos: "1",
        hp: "0",
        he: "0",
        ht: "0",
        htp: "2",
        correquisitos: "",
        prerrequisitos: ""
      },
      {
        nombre: "ÁLGEBRA Y TRIGONOMETRÍA",
        materia: "2555101",
        nivel: "1",
        creditos: "3",
        hp: "0",
        he: "0",
        ht: "4",
        htp: "0",
        correquisitos: "",
        prerrequisitos: ""
      },
      {
        nombre: "MATEMÁTICAS DISCRETAS I",
        materia: "2508207",
        nivel: "2",
        creditos: "3",
        hp: "0",
        he: "0",
        ht: "0",
        htp: "4",
        correquisitos: "",
        prerrequisitos: "2508120"
      },
    ];
  }


}
