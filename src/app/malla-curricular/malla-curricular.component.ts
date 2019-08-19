import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-malla-curricular',
  templateUrl: './malla-curricular.component.html',
  styleUrls: ['./malla-curricular.component.css']
})
export class MallaCurricularComponent implements OnInit {

  public semestre1: any;
  public semestre2: any;
  public semestre3: any;
  public semestre4: any;
  public semestre5: any;
  public semestre6: any;
  public semestre7: any;
  public semestre8: any;
  public semestre9: any;

  public pensum: any;

  public linea1: any;
  public linea2: any;
  public linea3: any;
  public enfasis: any;

  public cursosAlternativosDeCiencias: any;
  public sociohumanisticas: any;

  constructor(public activeModal: NgbActiveModal) {

    this.semestre1 = [

      {

        codigo: "2508102",
        nombre: "Intro a la Ing de Sistema",
        microcurriculo:
          "../../../src/pdf/microcurriculos/2508355-2508355 - Arquitectura de Computadores y Laboratorio.pdf",
        creditos: 2,
        ht: 2,
        hp: 0,
        htp: 0,
        area: 0
      },
      {
        codigo: "2508107",
        nombre: "Logica y Representacion I",
        microcurriculo:
          "../../../src/pdf/microcurriculos/2508355-2508355 - Arquitectura de Computadores y Laboratorio.pdf",
        creditos: 3,
        ht: 3,
        hp: 3,
        htp: 3,
        area: 0,
        corequisito: ["2508111"]
      },
      {
        codigo: "2508111",
        nombre: "Matematicas Discretas I",
        microcurriculo:
          "../../../src/pdf/microcurriculos/2508355-2508355 - Arquitectura de Computadores y Laboratorio.pdf",
        creditos: 4,
        ht: 4,
        hp: 0,
        htp: 0,
        area: 0
      },
      {
        codigo: "2537100",
        nombre: "Vivamos la Universidad",
        microcurriculo:
          "../../../src/pdf/microcurriculos/2508355-2508355 - Arquitectura de Computadores y Laboratorio.pdf",
        creditos: 0,
        ht: 2,
        hp: 0,
        htp: 0,
        area: 0
      },
      {
        codigo: "2538100",
        nombre: "Ingles I",
        microcurriculo:
          "../../../src/pdf/microcurriculos/2508355-2508355 - Arquitectura de Computadores y Laboratorio.pdf",
        creditos: 0,
        ht: 0,
        hp: 0,
        htp: 4,
        area: 0
      },
      {
        codigo: "2539100",
        nombre: "Lectoescritura",
        microcurriculo:
          "../../../src/pdf/microcurriculos/2508355-2508355 - Arquitectura de Computadores y Laboratorio.pdf",
        creditos: 4,
        ht: 4,
        hp: 0,
        htp: 0,
        area: 0
      },
      {
        codigo: "2555100",
        nombre: "Algebra y Trigonometria",
        microcurriculo:
          "../../../src/pdf/microcurriculos/2508355-2508355 - Arquitectura de Computadores y Laboratorio.pdf",
        creditos: 4,
        ht: 4,
        hp: 0,
        htp: 0,
        area: 0
      },
      {
        codigo: "2555130",
        nombre: "Cálculo diferencial",
        microcurriculo:
          "../../../src/pdf/microcurriculos/2508355-2508355 - Arquitectura de Computadores y Laboratorio.pdf",
        creditos: 4,
        ht: 4,
        hp: 0,
        htp: 0,
        area: 0
      }
    ];

    this.semestre2 = [
      {
        codigo: "2508202",
        nombre: "Logica y Representacion II",
        microcurriculo:
          "../../../src/pdf/microcurriculos/2508355-2508355 - Arquitectura de Computadores y Laboratorio.pdf",
        creditos: 4,
        ht: 4,
        hp: 0,
        htp: 0,
        area: 0,
        prerequisito: ["2508107"],
        corequisito: ["2508206"]
      },
      {
        codigo: "2508206",
        nombre: "Matematicas Discretas II",
        microcurriculo:
          "../../../src/pdf/microcurriculos/2508355-2508355 - Arquitectura de Computadores y Laboratorio.pdf",
        creditos: 4,
        ht: 4,
        hp: 0,
        htp: 0,
        area: 0,
        prerequisito: ["2508111"]
      },
      {
        codigo: "2508245",
        nombre: "Tecn de Progra y Laborat",
        microcurriculo:
          "../../../src/pdf/microcurriculos/2508355-2508355 - Arquitectura de Computadores y Laboratorio.pdf",
        creditos: 5,
        ht: 4,
        hp: 3,
        htp: 0,
        area: 0,
        corerequisito: ["2508202"]
      },
      {
        codigo: "2517350",
        nombre: "Formac Ciudadana y Const.",
        microcurriculo:
          "../../../src/pdf/microcurriculos/2508355-2508355 - Arquitectura de Computadores y Laboratorio.pdf",
        creditos: 0,
        ht: 1,
        hp: 0,
        htp: 0,
        area: 0,
        prerequisito: ["2539100"]
      },
      {
        codigo: "2538200",
        nombre: "Ingles II",
        microcurriculo:
          "../../../src/pdf/microcurriculos/2508355-2508355 - Arquitectura de Computadores y Laboratorio.pdf",
        creditos: 0,
        ht: 0,
        hp: 0,
        htp: 4,
        area: 0,
        prerequisito: ["2538100"]
      },
      {
        codigo: "2555230",
        nombre: "Calculo Integral",
        microcurriculo:
          "../../../src/pdf/microcurriculos/2508355-2508355 - Arquitectura de Computadores y Laboratorio.pdf",
        creditos: 4,
        ht: 4,
        hp: 0,
        htp: 0,
        area: 0,
        prerequisito: ["2555100", "2555130"]
      }
    ];

    this.semestre3 = [
      {
        codigo: "2508305",
        nombre: "Lógica y Representacion III",
        microcurriculo:
          "../../../src/pdf/microcurriculos/2508355-2508355 - Arquitectura de Computadores y Laboratorio.pdf",
        creditos: 5,
        ht: 4,
        hp: 3,
        htp: 0,
        area: 0,
        prerequisito: ["2508202"]
      },
      {
        codigo: "2508315",
        nombre: "Análisis y diseño de sistemas II",
        microcurriculo:
          "../../../src/pdf/microcurriculos/2508355-2508355 - Arquitectura de Computadores y Laboratorio.pdf",
        creditos: 5,
        ht: 4,
        hp: 3,
        htp: 0,
        area: 0,
        prerequisito: ["2508245"]
      },
      {
        codigo: "2508325",
        nombre: "Teoria de la Prob y Colas",
        microcurriculo:
          "../../../src/pdf/microcurriculos/2508355-2508355 - Arquitectura de Computadores y Laboratorio.pdf",
        creditos: 5,
        ht: 4,
        hp: 3,
        htp: 0,
        area: 0,
        prerequisito: ["2555230"]
      },
      {
        codigo: "2536100",
        nombre: "Descubriendo la Fisica",
        microcurriculo:
          "../../../src/pdf/microcurriculos/2508355-2508355 - Arquitectura de Computadores y Laboratorio.pdf",
        creditos: 4,
        ht: 0,
        hp: 0,
        htp: 4,
        area: 0
      },
      {
        codigo: "2538300",
        nombre: "Ingles III",
        microcurriculo:
          "../../../src/pdf/microcurriculos/2508355-2508355 - Arquitectura de Computadores y Laboratorio.pdf",
        creditos: 0,
        ht: 0,
        hp: 0,
        htp: 4,
        area: 0,
        prerequisito: ["2538200"]
      },
      {
        codigo: "2555220",
        nombre: "Algebra Lineal",
        microcurriculo:
          "../../../src/pdf/microcurriculos/2508355-2508355 - Arquitectura de Computadores y Laboratorio.pdf",
        creditos: 4,
        ht: 4,
        hp: 0,
        htp: 0,
        area: 0,
        prerequisito: ["2555100", "2555120"]
      }
    ];

    this.semestre4 = [
      {
        codigo: "2508417",
        nombre: "Análisis y diseño de sistemas II",
        microcurriculo:
          "../../../src/pdf/microcurriculos/2508355-2508355 - Arquitectura de Computadores y Laboratorio.pdf",
        creditos: 4,
        ht: 3,
        hp: 3,
        htp: 0,
        area: 0,
        prerequisito: ["2508315"]
      },
      {
        codigo: "2508425",
        nombre: "Estructuras físicas de la información y laboratorio",
        microcurriculo:
          "../../../src/pdf/microcurriculos/2508355-2508355 - Arquitectura de Computadores y Laboratorio.pdf",
        creditos: 4,
        ht: 4,
        hp: 3,
        htp: 0,
        area: 0,
        prerequisito: ["2508305"]
      },
      {
        codigo: "2508475",
        nombre: "Teoría de lenguajes y laboratorio",
        microcurriculo:
          "../../../src/pdf/microcurriculos/2508355-2508355 - Arquitectura de Computadores y Laboratorio.pdf",
        creditos: 5,
        ht: 4,
        hp: 3,
        htp: 0,
        area: 0,
        prerequisito: ["2508305"]
      },
      {
        codigo: "2508613",
        nombre: "Métodos estadisticos",
        microcurriculo:
          "../../../src/pdf/microcurriculos/2508355-2508355 - Arquitectura de Computadores y Laboratorio.pdf",
        creditos: 4,
        ht: 4,
        hp: 0,
        htp: 0,
        area: 0,
        prerequisito: ["2508325"]
      },
      {
        codigo: "2536200",
        nombre: "Física mecánica",
        microcurriculo:
          "../../../src/pdf/microcurriculos/2508355-2508355 - Arquitectura de Computadores y Laboratorio.pdf",
        creditos: 4,
        ht: 4,
        hp: 0,
        htp: 0,
        area: 0,
        prerequisito: ["2555100", "2555120", "2555100", "2555130"]
      },
      {
        codigo: "2538400",
        nombre: "Ingles IV",
        microcurriculo:
          "../../../src/pdf/microcurriculos/2508355-2508355 - Arquitectura de Computadores y Laboratorio.pdf",
        creditos: 0,
        ht: 0,
        hp: 0,
        htp: 4,
        area: 0,
        prerequisito: ["2538300"]
      }
    ];

    this.semestre5 = [
      {
        codigo: "2508205",
        nombre: "Modelos de Sistemas I",
        microcurriculo:
          "../../../src/pdf/microcurriculos/2508355-2508355 - Arquitectura de Computadores y Laboratorio.pdf",
        creditos: 4,
        ht: 4,
        hp: 0,
        htp: 0,
        area: 0,
        prerequisito: ["2508613"]
      },
      {
        codigo: "2508355",
        nombre: "Arquit de Comp y Laborato",
        microcurriculo:
          "../../../src/pdf/microcurriculos/2508355-2508355 - Arquitectura de Computadores y Laboratorio.pdf",
        creditos: 5,
        ht: 4,
        hp: 3,
        htp: 0,
        area: 0,
        prerequisito: ["2508206"]
      },
      {
        codigo: "2508525",
        nombre: "Bases de Datos y Laboratorio",
        microcurriculo:
          "../../../src/pdf/microcurriculos/2508355-2508355 - Arquitectura de Computadores y Laboratorio.pdf",
        creditos: 5,
        ht: 4,
        hp: 3,
        htp: 0,
        area: 0,
        prerequisito: ["2508425"]
      },
      {
        codigo: "2508545",
        nombre: "Comunicaciones y Laboratorio",
        microcurriculo:
          "../../../src/pdf/microcurriculos/2508355-2508355 - Arquitectura de Computadores y Laboratorio.pdf",
        creditos: 5,
        ht: 4,
        hp: 3,
        htp: 0,
        area: 0,
        prerequisito: ["2508305"]
      },
      {
        codigo: "2508585",
        nombre: "Arquitectura del Software",
        microcurriculo:
          "../../../src/pdf/microcurriculos/2508355-2508355 - Arquitectura de Computadores y Laboratorio.pdf",
        creditos: 2,
        ht: 2,
        hp: 0,
        htp: 0,
        area: 0,
        prerequisito: ["2508417"]
      },
      {
        codigo: "2538500",
        nombre: "Ingles V",
        microcurriculo:
          "../../../src/pdf/microcurriculos/2508355-2508355 - Arquitectura de Computadores y Laboratorio.pdf",
        creditos: 0,
        ht: 0,
        hp: 0,
        htp: 4,
        area: 0,
        prerequisito: ["2538400"]
      }
    ];

    this.semestre6 = [
      {
        codigo: "2508485",
        nombre: "Sistem Operativos y Laboratorio",
        microcurriculo:
          "../../../src/pdf/microcurriculos/2508355-2508355 - Arquitectura de Computadores y Laboratorio.pdf",
        creditos: 5,
        ht: 4,
        hp: 3,
        htp: 0,
        area: 0,
        prerequisito: ["2508425", "2508355"]
      },
      {
        codigo: "2508572",
        nombre: "Fundamentos de Investigacion",
        microcurriculo:
          "../../../src/pdf/microcurriculos/2508355-2508355 - Arquitectura de Computadores y Laboratorio.pdf",
        creditos: 4,
        ht: 4,
        hp: 0,
        htp: 0,
        area: 0,
        prerequisito: ["2508417"]
      },
      {
        codigo: "2508615",
        nombre: "Simulacion de Sistemas y Laboratorio",
        microcurriculo:
          "../../../src/pdf/microcurriculos/2508355-2508355 - Arquitectura de Computadores y Laboratorio.pdf",
        creditos: 4,
        ht: 3,
        hp: 3,
        htp: 0,
        area: 0,
        prerequisito: ["2508205"]
      },
      {
        codigo: "2508633",
        nombre: "Fundamentos Sistemas de Informacion",
        microcurriculo:
          "../../../src/pdf/microcurriculos/2508355-2508355 - Arquitectura de Computadores y Laboratorio.pdf",
        creditos: 2,
        ht: 2,
        hp: 0,
        htp: 0,
        area: 0,
        prerequisito: ["2508315"]
      },
      {
        codigo: "2508646",
        nombre: "Comunicaciones II",
        microcurriculo:
          "../../../src/pdf/microcurriculos/2508355-2508355 - Arquitectura de Computadores y Laboratorio.pdf",
        creditos: 4,
        ht: 0,
        hp: 0,
        htp: 5,
        area: 0,
        prerequisito: ["2508545"]
      },
      {
        codigo: "2536310",
        nombre: "Fisica de Campos",
        microcurriculo:
          "../../../src/pdf/microcurriculos/2508355-2508355 - Arquitectura de Computadores y Laboratorio.pdf",
        creditos: 4,
        ht: 4,
        hp: 0,
        htp: 5,
        area: 0,
        prerequisito: ["2536200", "2555230"]
      },
      {
        codigo: "2538600",
        nombre: "Ingles VI",
        microcurriculo:
          "../../../src/pdf/microcurriculos/2508355-2508355 - Arquitectura de Computadores y Laboratorio.pdf",
        creditos: 0,
        ht: 0,
        hp: 0,
        htp: 4,
        area: 0,
        prerequisito: ["2538500"]
      }
    ];

    this.semestre7 = [
      {
        codigo: "2508103",
        nombre: "Proyecto Integrador I",
        microcurriculo:
          "../../../src/pdf/microcurriculos/2508355-2508355 - Arquitectura de Computadores y Laboratorio.pdf",
        creditos: 1,
        ht: 0,
        hp: 3,
        htp: 0,
        area: 0,
        prerequisito: ["100 Créditos"]
      },
      {
        codigo: "2508625",
        nombre: "Calidad del Software",
        microcurriculo:
          "../../../src/pdf/microcurriculos/2508355-2508355 - Arquitectura de Computadores y Laboratorio.pdf",
        creditos: 4,
        ht: 4,
        hp: 0,
        htp: 0,
        area: 0,
        prerequisito: ["2508585"]
      },
      {
        codigo: "2508834",
        nombre: "Gestion de Proyectos de Sistemas De Informacion",
        microcurriculo:
          "../../../src/pdf/microcurriculos/2508355-2508355 - Arquitectura de Computadores y Laboratorio.pdf",
        creditos: 4,
        ht: 4,
        hp: 0,
        htp: 0,
        area: 0,
        prerequisito: ["2508633"]
      },
      {
        codigo: "2536503",
        nombre: "Laboratorio Integrado de Fisica",
        microcurriculo:
          "../../../src/pdf/microcurriculos/2508355-2508355 - Arquitectura de Computadores y Laboratorio.pdf",
        creditos: 1,
        ht: 0,
        hp: 3,
        htp: 0,
        area: 0,
        prerequisito: ["2536310"]
      }
    ];

    this.semestre8 = [
      {
        codigo: "2508203",
        nombre: "Proyec Integrador II-area Electiva",
        microcurriculo:
          "../../../src/pdf/microcurriculos/2508355-2508355 - Arquitectura de Computadores y Laboratorio.pdf",
        creditos: 1,
        ht: 0,
        hp: 3,
        htp: 0,
        area: 0,
        prerequisito: ["2508103"]
      }
    ];

    this.semestre9 = [
      {
        codigo: "2505562",
        nombre: "Etica Profesional",
        microcurriculo:
          "../../../src/pdf/microcurriculos/2508355-2508355 - Arquitectura de Computadores y Laboratorio.pdf",
        creditos: 2,
        ht: 2,
        hp: 3,
        htp: 0,
        area: 0,
        prerequisito: ["120 Créditos"]
      }
    ];

    this.pensum = [
      this.semestre1,
      this.semestre2,
      this.semestre3,
      this.semestre4,
      this.semestre5,
      this.semestre6,
      this.semestre7,
      this.semestre8,
      this.semestre9
    ];

    this.linea1 = {
      nombre:
        "Ingeniería de software, sistemas de información y administración de la información",
      cursos: [
        {
          nombre: "Ingeniería web",
          codigo: "2508435",
          creditos: 4,
          prerequisitos: ["2508525"]
        },
        {
          nombre: "Codiseño",
          codigo: "2508515",
          creditos: 4,
          prerequisitos: []
        },
        {
          nombre: "Seminario de bases de datos",
          codigo: "2508688",
          creditos: 4,
          prerequisitos: ["2508525"]
        },
        {
          nombre: "Ing. de procesos de software",
          codigo: "2508689",
          creditos: 4,
          prerequisitos: []
        },
        {
          nombre: "Pruebas de software",
          codigo: "2508690",
          creditos: 4,
          prerequisitos: ["2508625"]
        },
        {
          nombre: "Sistemas de información geográfica",
          codigo: "2508720",
          creditos: 4,
          prerequisitos: []
        },
        {
          nombre: "Desarrollo de aplicaciones empresariales",
          codigo: "2508721",
          creditos: 4,
          prerequisitos: ["2508525", "2508585"]
        },
        {
          nombre: "Ingeniería de procesos de negocios",
          codigo: "2508722",
          creditos: 4,
          prerequisitos: ["2508525", "2508585"]
        },
        {
          nombre: "Construcción de software seguro",
          codigo: "2508723",
          creditos: 4,
          prerequisitos: []
        },
        {
          nombre: "Prof. arquitectura del software",
          codigo: "2508726",
          creditos: 4,
          prerequisitos: ["2508417", "2508585"]
        }
      ]
    };

    this.linea2 = {
      nombre:
        "Algoritmia y programación, matemáticas discretas y ciencia computacional",
      cursos: [
        {
          nombre: "Análisis numérico",
          codigo: "2508304",
          creditos: 4,
          prerequisitos: []
        },
        {
          nombre: "Optmización",
          codigo: "2508314",
          creditos: 4,
          prerequisitos: ["2508325"]
        },
        {
          nombre: "Programación de gráficos",
          codigo: "2508391",
          creditos: 4,
          prerequisitos: ["2508245"]
        },
        {
          nombre: "Programación lineal",
          codigo: "2508394",
          creditos: 4,
          prerequisitos: []
        },
        {
          nombre: "Simulación de sistemas II",
          codigo: "2508405",
          creditos: 4,
          prerequisitos: []
        },
        {
          nombre: "Sistemas complejos",
          codigo: "2508495",
          creditos: 4,
          prerequisitos: []
        },
        {
          nombre: "Modelos de sistemas II",
          codigo: "2508691",
          creditos: 4,
          prerequisitos: []
        },
        {
          nombre: "Técnica para intel. artificial I",
          codigo: "2508692",
          creditos: 4,
          prerequisitos: []
        },
        {
          nombre: "Técnica para intel. artificial II",
          codigo: "2508693",
          creditos: 4,
          prerequisitos: []
        },
        {
          nombre: "Compiladores",
          codigo: "2508695",
          creditos: 4,
          prerequisitos: []
        },
        {
          nombre: "Matemáticas discretas III",
          codigo: "2508696",
          creditos: 4,
          prerequisitos: ["2508206"]
        },
        {
          nombre: "Matemáticas discretas IV",
          codigo: "2508697",
          creditos: 4,
          prerequisitos: ["2508696"]
        },
        {
          nombre: "Modelos de sistemas III",
          codigo: "2508698",
          creditos: 4,
          prerequisitos: []
        },
        {
          nombre: "Técn. paradigmas de programación",
          codigo: "2508699",
          creditos: 4,
          prerequisitos: []
        },
        {
          nombre: "Introducción a la algoritmia bioinformática",
          codigo: "2508715",
          creditos: 4,
          prerequisitos: ["2508305"]
        }
      ]
    };

    this.linea3 = {
      nombre: "Arquitectura de computadores y comunicación de datos",
      cursos: [
        {
          nombre: "Diseño de circuitos digitales",
          codigo: "2508354",
          creditos: 4,
          prerequisitos: []
        },
        {
          nombre: "Arquitectura II",
          codigo: "2508455",
          creditos: 4,
          prerequisitos: []
        },
        {
          nombre: "Sistemas paralelos",
          codigo: "2508456",
          creditos: 4,
          prerequisitos: []
        },
        {
          nombre: "Codiseño",
          codigo: "2508515",
          creditos: 4,
          prerequisitos: []
        },
        {
          nombre: "Sistemas Embebidos",
          codigo: "2508516",
          creditos: 4,
          prerequisitos: []
        },
        {
          nombre: "Laboratoria Electronica y Señales",
          codigo: "2508531",
          creditos: 4,
          prerequisitos: []
        },
        {
          nombre: "Electronica y señales",
          codigo: "2508550",
          creditos: 4,
          prerequisitos: []
        },
        {
          nombre: "Servicios En Internet",
          codigo: "2508750",
          creditos: 4,
          prerequisitos: []
        },
        {
          nombre: "Seminario Voz Ip",
          codigo: "2508757",
          creditos: 4,
          prerequisitos: []
        },
        {
          nombre: "Profundizacion En Redes I",
          codigo: "2508758",
          creditos: 4,
          prerequisitos: []
        },
        {
          nombre: "Profundizacion En Redes II",
          codigo: "2508759",
          creditos: 4,
          prerequisitos: []
        },
        {
          nombre: "Profundizacion En Redes III",
          codigo: "2508762",
          creditos: 4,
          prerequisitos: []

        },
        {
          nombre: "Profundizacion En Redes IV",
          codigo: "2508763",
          creditos: 4,
          prerequisitos: []
        },
        {
          nombre: "Procesamiento Digital De Imagenes",
          codigo: "2508765",
          creditos: 4,
          prerequisitos: []
        },
        {
          nombre: "Computacion Movil",
          codigo: "2508767",
          creditos: 4,
          prerequisitos: []
        }
      ]
    };

    this.sociohumanisticas = [];

    this.cursosAlternativosDeCiencias = [
      {
        nombre: "Intro. A las Ciencias",
        codigo: 2508154,
        creditos: 4,
        prerequisitos: []
      },
      {
        nombre: "Diseño De circuitos Digitales",
        codigo: 2508356,
        creditos: 4,
        prerequisitos: []
      },
      {
        nombre: "Fisica De Ondas",
        codigo: 2536300,
        creditos: 4,
        prerequisitos: []
      },
      {
        nombre: "Fisica Termica",
        codigo: 2536320,
        creditos: 4,
        prerequisitos: []
      },
      {
        nombre: "Fisica Moderna",
        codigo: 2536400,
        creditos: 4,
        prerequisitos: []
      },
      {
        nombre: "Geometria Euclidiana",
        codigo: 2555110,
        creditos: 4,
        prerequisitos: []
      },
      {
        nombre: "Ecuaciones Diferenciales",
        codigo: 2555312,
        creditos: 4,
        prerequisitos: []
      },
      {
        nombre: "Calculo Vectorial",
        codigo: 2555330,
        creditos: 4,
        prerequisitos: []
      }
    ];

    this.enfasis = [this.linea1, this.linea2, this.linea3];
  }

  ngOnInit() { }

  colorArea = function (area) {
    return "area" + area;
  };

  mostrarRequisitos(prerequisitos: any, corequisitos: any, materia: any): void {
    if ($("#" + materia).hasClass("materiaSeleccionada")) {
      $("#" + materia).removeClass("materiaSeleccionada");
      if (prerequisitos != null) {
        for (let i = 0; i < prerequisitos.length; i++) {
          $("#" + prerequisitos[i]).removeClass("prerequisito");
        }
      }
      if (corequisitos != null) {
        for (let i = 0; i < corequisitos.length; i++) {
          $("#" + corequisitos[i]).removeClass("corequisito");
        }
      }
    } else {
      $("#" + materia).addClass("materiaSeleccionada");
      if (prerequisitos != null) {
        for (let i = 0; i < prerequisitos.length; i++) {
          $("#" + prerequisitos[i]).addClass("prerequisito");
        }
      }
      if (corequisitos != null) {
        for (let i = 0; i < corequisitos.length; i++) {
          $("#" + corequisitos[i]).addClass("corequisito");
        }
      }
    }
  }
}