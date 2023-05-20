const {materias} = require("../db/cursos")

const obtenerMaterias = (req, res) => {
  res.json({
    status: "good",
    cantidadMaterias: materias.length,
    
    materias: materias.map(materia => ({
      nombre: materia.nombre, 
      cursos: materia.cursos
    }))
  })
}

module.exports = {
  obtenerMaterias
}