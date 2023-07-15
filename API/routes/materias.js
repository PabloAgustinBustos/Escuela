const {Router} = require("express")
const {comprobarExistenciaCurso, comprobarExistenciaEspecialidad} = require("../middlewares/cursos")
const {obtenerMaterias, obtenerMateriasPorCurso, obtenerMateriasPorEspecialidad} = require("../controllers/materias")

const app = Router()

app.get("/", obtenerMaterias)
app.get("/:curso", comprobarExistenciaCurso, obtenerMateriasPorCurso)
app.get("/especialidad/:especialidad", comprobarExistenciaEspecialidad, obtenerMateriasPorEspecialidad)


module.exports = app