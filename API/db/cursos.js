const cursos = [
  {
    // primary key
    anio: 1,
    
    divisiones: [
      {
        division: "A",
        cantidadAlumnos: 1,
        alumnos: ["asd23"]
      },

      {
        division: "B",
        cantidadAlumnos: 5,
        alumnos: ["fg777", "as1236567", "gh867623", "a54u845", "dg53"]
      }
    ],

    orientacion: "ciclo básico",

    materias: ["123abc", "dfsdf73243", "gfg7868234", "dfsdf24fgg"]
  },

  {
    // primary key
    anio: 2,
    
    divisiones: [
      {
        division: "A",
        cantidadAlumnos: 0,
        alumnos: []
      },

      {
        division: "B",
        cantidadAlumnos: 0,
        alumnos: []
      }
    ],

    orientacion: "ciclo básico",

    materias: ["123abc", "dfsdf73243", "gfg7868234", "dfsdf24fgg"]
  },
  
  {
    // primary key
    anio: 3,
    
    divisiones: [
      {
        division: "A",
        cantidadAlumnos: 0,
        alumnos: []
      },

      {
        division: "B",
        cantidadAlumnos: 0,
        alumnos: []
      }
    ],

    orientacion: "ciclo básico",

    materias: ["123abc", "dfsdf73243", "gfg7868234", "dfsdf24fgg"]
  },

  {
    // primary key
    anio: 4,
    
    divisiones: [
      {
        division: "A",
        cantidadAlumnos: 0,
        alumnos: []
      }
    ],

    orientacion: "informática",

    materias: ["fgdf444g"]
  }
]

const especialidades = {
  ciclo_basico: [
    "123abc",
    "gfg7868234",
    "gfg7868234",
    "dfsdf24fgg"
  ],

  informatica: [
    "fgdf444g",
    "87f54s",
    "aa885",
    "ava8866d"
  ],

  mecanica: [
    "dfdf888",
    "aa99911",
    "aa9h80aaaav1",
    "aa9999kkk"
  ]
}

const materias = [
  {
    // primary key
    id: "123abc",
    nombre: "Lengua",
    cursos: [1, 2, 3],
    especialidad: "ciclo basico"
  },

  {
    // primary key
    id: "dfsdf73243",
    nombre: "Geografía",
    cursos: [1, 2, 3],
    especialidad: "ciclo basico"
  },

  {
    // primary key
    id: "gfg7868234",
    nombre: "Historia",
    cursos: [1, 2, 3],
    especialidad: "ciclo basico"
  },

  {
    // primary key
    id: "dfsdf24fgg",
    nombre: "matematica",
    cursos: [1, 2, 3],
    especialidad: "ciclo basico"
  },

  {
    // primary key
    id: "fgdf444g",
    nombre: "programación",
    cursos: [4],
    especialidad: "informatica"
  },

  {
    // primary key
    id: "87f54s",
    nombre: "organización de computadoras",
    cursos: [4],
    especialidad: "informatica"
  },

  {
    // primary key
    id: "aa885",
    nombre: "Logica",
    cursos: [4],
    especialidad: "informatica"
  },

  {
    // primary key
    id: "ava8866d",
    nombre: "proyecto informatico 1",
    cursos: [4],
    especialidad: "informatica"
  },

  {
    id: "dfdf888",
    nombre: "taller de tecnología y del control",
    cursos: [4],
    especialidad: "mecanica"
  },

  {
    id: "aa99911",
    nombre: "dibujo mecanico 1",
    cursos: [4],
    especialidad: "mecanica"
  },

  {
    id: "aa9h80aaaav1",
    nombre: "hidraulica industrial",
    cursos: [4],
    especialidad: "mecanica"
  },

  {
    id: "aa9999kkk",
    nombre: "electrotecnia",
    cursos: [4],
    especialidad: "mecanica"
  }
]



module.exports = {
  cursos,
  materias,
  especialidades
}