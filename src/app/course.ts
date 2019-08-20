export class Course {
    constructor(
        public id: number,
        public nombre: String,
        public materia: number,
        public nivel: number,
        public creditos: number,
        public hp: number,
        public he: number,
        public ht: number,
        public htp: number,
        public correquisitos: number,
        public prerrequisitos: number
      ) {  }
}

