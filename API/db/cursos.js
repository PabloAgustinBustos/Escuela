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
  }
]

const materias = [
  {
    // primary key
    id: "123abc",
    nombre: "Lengua",
    cursos: [1, 2, 3]
  },

  {
    // primary key
    id: "dfsdf73243",
    nombre: "Geografía",
    cursos: [1, 2, 3]
  },

  {
    // primary key
    id: "gfg7868234",
    nombre: "Historia",
    cursos: [1, 2, 3]
  },

  {
    // primary key
    id: "dfsdf24fgg",
    nombre: "Matemática",
    cursos: [1, 2, 3]
  },
]

module.exports = {
  cursos,
  materias
}