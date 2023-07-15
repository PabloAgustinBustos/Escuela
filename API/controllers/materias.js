const {materias, cursos, especialidades} = require("../db/cursos")
const getParamToInt = require("../helpers/getParamToInt")

const obtenerMaterias = (req, res) => {
  const asignaturas = materias.map(materia => ({
    nombre: materia.nombre, 
    cursos: materia.cursos
  }))

  res.json({
    status: "good",
    cantidadMaterias: asignaturas.length,
    
    materias: asignaturas
  })
}

const obtenerMateriasPorCurso = (req, res) => {
  console.log("ejecutando controlador")

  let curso = getParamToInt(req.params)

  let asignaturas = materias.map(materia => ({
    id: materia.id,
    nombre: materia.nombre,
    cursos: materia.cursos
  }))

  asignaturas = asignaturas.filter(materia => materia.cursos.includes(curso))

  res.json({
    status: "good",
    cantidad: asignaturas.length,
    materias: asignaturas
  })
}

const obtenerMateriasPorEspecialidad = (req, res) => {
  const { especialidad } = req.params

  const materiasID = especialidades[especialidad]

  const materiasNombres = []

  for(id of materiasID){
    const nombreMateria = materias.find(materia => materia.id === id).nombre
    
    materiasNombres.push(nombreMateria)
  }

  res.json({
    status: "good",
    materias: materiasNombres
  })
}

module.exports = {
  obtenerMaterias,
  obtenerMateriasPorCurso,
  obtenerMateriasPorEspecialidad
}