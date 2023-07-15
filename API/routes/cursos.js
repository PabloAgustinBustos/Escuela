const {Router} = require("express")
const {obtenerCursos} = require("../controllers/cursos")

const app = Router()

app.get("/", obtenerCursos)

module.exports = app