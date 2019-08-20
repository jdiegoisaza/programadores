import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';





@Component({
  selector: 'app-materia-list',
  templateUrl: './materia-list.component.html',
  styleUrls: ['./materia-list.component.css']
})
export class MateriaListComponent implements OnInit {
  cursos=null;
  typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
  panelOpenState = false;
  semestres=null;
  materias=[];

  

  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

 
  constructor() { 
    this.cursos=[
      {
         "Nivel": 1,
         "Materias":
         [
             {
                "Materia": "2508102",
                "Nombre": "INTRO A LA ING DE SISTEMA",
                "Credito": "2",
                "hp": "0",
                "he": "0",
                "ht": "2",
                "htp": "0",
                "correquisitos": [],
                "prerrequisitos":[]
  
             },
             {
  
              "Materia": "2508107",
              "Nombre": "LOGICA Y REPRESENTACION I",
              "Credito": "4",
              "hp": "3",
              "he": "0",
              "ht": "3",
              "htp": "0",
              "correquisitos": [
                  {
                      "codigo": "2508111"
                  }
              ],
              "prerrequisitos":[ ]
  
             },
  
             {
              "Materia": "2508111",
              "Nombre": "MATEMATICAS DISCRETAS I",
              "Credito": "4",
              "hp": "0",
              "he": "0",
              "ht": "4",
              "htp": "0",
              "correquisitos": [],
              "prerrequisitos":[ ]
  
             },
             {
              "Materia": "2537100",
              "Nombre": "VIVAMOS LA UNIVERSIDAD",
              "Credito": "0",
              "hp": "0",
              "he": "0",
              "ht": "2",
              "htp": "0",
              "correquisitos": [],
              "prerrequisitos":[ ]
              
             },
             {
              "Materia": "2538100",
              "Nombre": "INGLES I",
              "Credito": "0",
              "hp": "0",
              "he": "0",
              "ht": "0",
              "htp": "4",
              "correquisitos": [],
              "prerrequisitos":[ ]
             
             },
             {
              "Materia": "2539100",
              "Nombre": "LECTOESCRITURA",
              "Credito": "4",
              "hp": "0",
              "he": "0",
              "ht": "4",
              "htp": "0",
              "correquisitos": [],
              "prerrequisitos":[ ]
              
             },
             {
              "Materia": "2555100",
              "Nombre": "ALGEBRA Y TRIGONOMETRIA",
              "Credito": "4",
              "hp": "0",
              "he": "0",
              "ht": "4",
              "htp": "0",
              "correquisitos": [],
              "prerrequisitos":[ ]
              
             },
             {
              "Materia": "2555130",
              "Nombre": "CALCULO DIFERENCIAL",
              "Credito": "4",
              "hp": "0",
              "he": "0",
              "ht": "4",
              "htp": "0",
              "correquisitos": [
                  {
                      "codigo": "2555100"
                  }
              ],
              "prerrequisitos":[ ]
              
             }
  
  
  
         ]
  
  
      },
      {
  
          "Nivel": 2,
          "Materias":
          [
              {
                 "Materia": "2508202",
                 "Nombre": "LOGIC Y REPRESENTACION II",
                 "Credito": "2",
                 "hp": "0",
                 "he": "0",
                 "ht": "2",
                 "htp": "0",
                 "correquisitos": [
                     {
                         "codigo": "2508206"
                     }
                 ],
                 "prerrequisitos":[
                     {
                         "codigo": "2508107"
                     }
                 ]
   
              },
              {
   
               "Materia": "2508206",
               "Nombre": "MATEMATICAS DISCRETAS II",
               "Credito": "4",
               "hp": "3",
               "he": "0",
               "ht": "3",
               "htp": "0",
               "correquisitos": [],
               "prerrequisitos":[
                   {
                       "codigo": "2508111"
                   }
                ]
   
              },
   
              {
               "Materia": "2508245",
               "Nombre": "TECN DE PROGRA Y LABORAT",
               "Credito": "4",
               "hp": "0",
               "he": "0",
               "ht": "4",
               "htp": "0",
               "correquisitos": [
                   {
                       "codigo": "2508202"
                   }
               ],
               "prerrequisitos":[ ]
   
              },
              {
               "Materia": "2517350",
               "Nombre": "FORMAC CIUDADANA Y CONST",
               "Credito": "0",
               "hp": "0",
               "he": "0",
               "ht": "2",
               "htp": "0",
               "correquisitos": [],
               "prerrequisitos":[ 
                   {
                       "codigo": "2539100"
                   }
               ]
               
              },
              {
               "Materia": "2538200",
               "Nombre": "INGLES II",
               "Credito": "0",
               "hp": "0",
               "he": "0",
               "ht": "0",
               "htp": "4",
               "correquisitos": [],
               "prerrequisitos":[
                   {
                       "codigo": "2538100"
                   }
                ]
              
              },
              {
               "Materia": "2555120",
               "Nombre": "GEOMET VECTORIAL Y ANALIT",
               "Credito": "4",
               "hp": "0",
               "he": "0",
               "ht": "4",
               "htp": "0",
               "correquisitos": [],
               "prerrequisitos":[ ]
               
              },
              {
               "Materia": "2555230",
               "Nombre": "CALCULO INTEGRAL",
               "Credito": "4",
               "hp": "0",
               "he": "0",
               "ht": "4",
               "htp": "0",
               "correquisitos": [],
               "prerrequisitos":[
                   {
                       "codigo": "2555100"
                   },
                   {
                       "codigo": "2555130"
                   }
                ]
               
              }
            
   
   
   
          ]
   
      },
      {
          "Nivel": 3,
          "Materias":
          [
              {
                 "Materia": "2508305",
                 "Nombre": "LOGI Y REPRESENTACION III",
                 "Credito": "2",
                 "hp": "0",
                 "he": "0",
                 "ht": "2",
                 "htp": "0",
                 "correquisitos": [],
                 "prerrequisitos":[
                     {
                         "codigo": "2508202"
                     }
                 ]
   
              },
              {
   
               "Materia": "2508315",
               "Nombre": "ANAL Y DIS DE SISTEMAS I",
               "Credito": "4",
               "hp": "3",
               "he": "0",
               "ht": "3",
               "htp": "0",
               "correquisitos": [],
               "prerrequisitos":[
                   {
                       "codigo": "2508245"
                   }
                ]
   
              },
   
              {
               "Materia": "2508325",
               "Nombre": "TEORIA DE LA PROB Y COLAS",
               "Credito": "4",
               "hp": "0",
               "he": "0",
               "ht": "4",
               "htp": "0",
               "correquisitos": [],
               "prerrequisitos":[ 
                   {
                       "codigo": "2555230"
                   }
               ]
   
              },
              {
               "Materia": "2536100",
               "Nombre": "DESCUBRIENDO LA FISICA",
               "Credito": "0",
               "hp": "0",
               "he": "0",
               "ht": "2",
               "htp": "0",
               "correquisitos": [],
               "prerrequisitos":[]
               
              },
              {
               "Materia": "2538300",
               "Nombre": "INGLES III",
               "Credito": "0",
               "hp": "0",
               "he": "0",
               "ht": "0",
               "htp": "4",
               "correquisitos": [],
               "prerrequisitos":[
                   {
                       "codigo": "2538200"
                   }
                ]
              
              },
              {
               "Materia": "2555220",
               "Nombre": "ALGEBRA LINEAL",
               "Credito": "4",
               "hp": "0",
               "he": "0",
               "ht": "4",
               "htp": "0",
               "correquisitos": [],
               "prerrequisitos":[ 
                   {
                       "codigo": "2555100"
                   },
                   {
                       "codigo": "2555120"
                   }
               ]
               
              }
           
            
   
   
   
          ]
      },
      {
          "Nivel": 4,
          "Materias":
          [
              {
                 "Materia": "2508417",
                 "Nombre": "ANA. Y DISEÑ. DE SIST. II",
                 "Credito": "2",
                 "hp": "0",
                 "he": "0",
                 "ht": "2",
                 "htp": "0",
                 "correquisitos": [],
                 "prerrequisitos":[
                     {
                         "codigo": "2508315"
                     }
                 ]
   
              },
              {
   
               "Materia": "2508425",
               "Nombre": "ESTR FIS DE LA INF Y LABO",
               "Credito": "4",
               "hp": "3",
               "he": "0",
               "ht": "3",
               "htp": "0",
               "correquisitos": [],
               "prerrequisitos":[
                   {
                       "codigo": "2508305"
                   }
                ]
   
              },
   
              {
               "Materia": "2508475",
               "Nombre": "TEORIA DE LENG Y LABORAT",
               "Credito": "4",
               "hp": "0",
               "he": "0",
               "ht": "4",
               "htp": "0",
               "correquisitos": [],
               "prerrequisitos":[ 
                   {
                       "codigo": "2508305"
                   }
               ]
   
              },
              {
               "Materia": "2508613",
               "Nombre": "METODOS ESTADISTICOS",
               "Credito": "0",
               "hp": "0",
               "he": "0",
               "ht": "2",
               "htp": "0",
               "correquisitos": [],
               "prerrequisitos":[
                   {
                       "codigo": "2508325"
                   }
               ]
               
              },
              {
               "Materia": "2536200",
               "Nombre": "FISICA MECANICA",
               "Credito": "0",
               "hp": "0",
               "he": "0",
               "ht": "0",
               "htp": "4",
               "correquisitos": [],
               "prerrequisitos":[
                   {
                       "codigo": "2555100"
                   },
                   {
                       "codigo":"2555130"
                   },
                   {
                       "codigo":"2555120"
                   },
                   {
                       "codigo":"2536100"
                   }
                ]
              
              },
              {
               "Materia": "2538400",
               "Nombre": "INGLES IV",
               "Credito": "4",
               "hp": "0",
               "he": "0",
               "ht": "4",
               "htp": "0",
               "correquisitos": [],
               "prerrequisitos":[ 
                   {
                       "codigo": "2538300"
                   }
                 
               ]
               
              }
             
            
   
   
   
          ]
      },
      {
          "Nivel": 5,
          "Materias":
          [
              {
                 "Materia": "2508205",
                 "Nombre": "MODELOS DE SISTEMAS I",
                 "Credito": "2",
                 "hp": "0",
                 "he": "0",
                 "ht": "2",
                 "htp": "0",
                 "correquisitos": [],
                 "prerrequisitos":[
                     {
                         "codigo": "2508613"
                     }
                 ]
   
              },
              {
   
               "Materia": "2508355",
               "Nombre": "ARQUIT DE COMP Y LABORATO",
               "Credito": "4",
               "hp": "3",
               "he": "0",
               "ht": "3",
               "htp": "0",
               "correquisitos": [],
               "prerrequisitos":[
                   {
                       "codigo": "2508206"
                   }
                ]
   
              },
   
              {
               "Materia": "2508525",
               "Nombre": "BASES DE DATOS Y LABORATO",
               "Credito": "4",
               "hp": "0",
               "he": "0",
               "ht": "4",
               "htp": "0",
               "correquisitos": [],
               "prerrequisitos":[ 
                   {
                       "codigo": "2508425"
                   }
               ]
   
              },
              {
               "Materia": "2508545",
               "Nombre": "COMUNICACIONES Y LABORATO",
               "Credito": "0",
               "hp": "0",
               "he": "0",
               "ht": "2",
               "htp": "0",
               "correquisitos": [],
               "prerrequisitos":[
                   {
                       "codigo": "2508305"
                   }
               ]
               
              },
              {
               "Materia": "2508585",
               "Nombre": "ARQUITECTURA DEL SOFTWARE",
               "Credito": "0",
               "hp": "0",
               "he": "0",
               "ht": "0",
               "htp": "4",
               "correquisitos": [
                   {
                       "codigo":"2508525"
                   }
               ],
               "prerrequisitos":[
                   {
                       "codigo": "2508417"
                   }
                   
                ]
              
              },
              {
               "Materia": "2538500",
               "Nombre": "INGLES V",
               "Credito": "4",
               "hp": "0",
               "he": "0",
               "ht": "4",
               "htp": "0",
               "correquisitos": [],
               "prerrequisitos":[ 
                   {
                       "codigo": "2538400"
                   }
                 
               ]
               
              }
          ]     
      },
      {
          "Nivel": 6,
          "Materias":
          [
              {
                 "Materia": "2508485",
                 "Nombre": "SISTEM OPERAT Y LABORATOR",
                 "Credito": "2",
                 "hp": "0",
                 "he": "0",
                 "ht": "2",
                 "htp": "0",
                 "correquisitos": [],
                 "prerrequisitos":[
                     {
                         "codigo": "2508425"
                     },
                     {
                         "codigo":"2508355"
                     }
                 ]
   
              },
              {
   
               "Materia": "2508572",
               "Nombre": "FUND. DE INVESTIGACION",
               "Credito": "4",
               "hp": "3",
               "he": "0",
               "ht": "3",
               "htp": "0",
               "correquisitos": [],
               "prerrequisitos":[
                   {
                       "codigo": "2508417"
                   }
                ]
   
              },
   
              {
               "Materia": "2508615",
               "Nombre": "SIMULACION DE SIST Y LABO",
               "Credito": "4",
               "hp": "0",
               "he": "0",
               "ht": "4",
               "htp": "0",
               "correquisitos": [],
               "prerrequisitos":[ 
                   {
                       "codigo": "2508205"
                   }
               ]
   
              },
              {
               "Materia": "2508633",
               "Nombre": "FUND SIST DE INFORMACION",
               "Credito": "0",
               "hp": "0",
               "he": "0",
               "ht": "2",
               "htp": "0",
               "correquisitos": [],
               "prerrequisitos":[
                   {
                       "codigo": "2508315"
                   }
               ]
               
              },
              {
               "Materia": "2508646",
               "Nombre": "COMUNICACIONES II",
               "Credito": "0",
               "hp": "0",
               "he": "0",
               "ht": "0",
               "htp": "4",
               "correquisitos": [],
               "prerrequisitos":[
                   {
                       "codigo": "2508545"
                   }
                   
                ]
              
              },
              {
               "Materia": "2536310",
               "Nombre": "FISICA DE CAMPOS",
               "Credito": "4",
               "hp": "0",
               "he": "0",
               "ht": "4",
               "htp": "0",
               "correquisitos": [],
               "prerrequisitos":[ 
                   {
                       "codigo": "2536200"
                   },
                   {
                       "codigo":"2555230"
                   }
                 
               ]
               
              },
              {
                  "Materia": "2538600",
                  "Nombre": "INGLES VI",
                  "Credito": "4",
                  "hp": "0",
                  "he": "0",
                  "ht": "4",
                  "htp": "0",
                  "correquisitos": [],
                  "prerrequisitos":[ 
                      {
                          "codigo": "2538500"
                      }
                    
                    
                  ]
                  
              }
          ]
      },
      {
          "Nivel": 7,
          "Materias":
          [
              {
                 "Materia": "2508103",
                 "Nombre": "PROYECTO INTEGRADOR I",
                 "Credito": "2",
                 "hp": "0",
                 "he": "0",
                 "ht": "2",
                 "htp": "0",
                 "correquisitos": [],
                 "prerrequisitos":[]
   
              },
              {
   
               "Materia": "2508625",
               "Nombre": "CALIDAD DEL SOFTWARE",
               "Credito": "4",
               "hp": "3",
               "he": "0",
               "ht": "3",
               "htp": "0",
               "correquisitos": [],
               "prerrequisitos":[
                   {
                       "codigo": "2508585"
                   }
                ]
   
              },
   
              {
               "Materia": "2508834",
               "Nombre": "GEST DE PROYEC SIS D INF",
               "Credito": "4",
               "hp": "0",
               "he": "0",
               "ht": "4",
               "htp": "0",
               "correquisitos": [],
               "prerrequisitos":[ 
                   {
                       "codigo": "2508633"
                   }
               ]
   
              },
              {
               "Materia": "2536503",
               "Nombre": "LAB INTEGRADO DE FISICA",
               "Credito": "0",
               "hp": "0",
               "he": "0",
               "ht": "2",
               "htp": "0",
               "correquisitos": [],
               "prerrequisitos":[
                   {
                       "codigo": "2536310"
                   }
               ]
               
              }
            
            
           
          ]
      },
      {
          "Nivel": 8,
          "Materias":
          [
              {
                "Materia": "2508203",
               "Nombre": "PROYEC INTEG II-AREA ELEC",
               "Credito": "0",
               "hp": "0",
               "he": "0",
               "ht": "2",
               "htp": "0",
               "correquisitos": [],
               "prerrequisitos":[
                   {
                       "codigo": "2508103"
                   }
               ]
              }
          ]
      },
      {
          "Nivel": 9,
          "Materias":
          [
              {
                "Materia": "2505562",
               "Nombre": "ETICA PROFESIONAL",
               "Credito": "0",
               "hp": "0",
               "he": "0",
               "ht": "2",
               "htp": "0",
               "correquisitos": [],
               "prerrequisitos":[]
              }
          ]
      }
  ]

 
  let dato=JSON.stringify(this.cursos);
  
  this.semestres = JSON.parse(dato);
  
 
 
  
  }

 

  ngOnInit() {
  }

}
