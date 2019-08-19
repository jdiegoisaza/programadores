import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-insertar-curso',
  templateUrl: './editar-eliminar-curso.component.html',
  styleUrls: ['./editar-eliminar-curso.component.css']
})
export class InsertarCursoComponent {

  public cursos = {
    cursos: [{codigo:"3232",nombre:"curso1"},{codigo:"3232",nombre:"curso1"}]
  };
}
