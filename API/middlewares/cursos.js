const {cursos, especialidades} = require("../db/cursos")
const getParamToInt = require("../helpers/getParamToInt")

const comprobarExistenciaCurso = (req, res, next) => {
  console.log("ejecutando comprobarExistencia")

  let curso = getParamToInt(req.params)

  const existe = cursos.some(obj => obj.anio === curso)

  if(!existe){
    return res.status(404).json({
      status: "bad",
      message: "el curso no existe o lo escribió mal"
    })
  }

  console.log("continuando con la siguiente función")
  next()
}

const comprobarExistenciaEspecialidad = (req, res, next) => {
  let { especialidad } = req.params

  if(!especialidades[especialidad]){
    res.status(404).json({
      status: "bad",
      message: "No se encuentra la especialidad o no existe"
    })
  }

  next()
}

module.exports = {
  comprobarExistenciaCurso,
  comprobarExistenciaEspecialidad
}