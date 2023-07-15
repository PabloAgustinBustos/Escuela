const {cursos} = require("../db/cursos")

const obtenerCursos = (req, res) => {
  const {orden} = req.query

  console.log(orden)

  res.json({
    status: "good",
    cursos
  })
}

module.exports = {
  obtenerCursos
}