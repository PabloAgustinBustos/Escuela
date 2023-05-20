const {Router} = require("express")

const {obtenerMaterias} = require("../controllers/materias")

const app = Router()

app.get("/materias", obtenerMaterias)

module.exports = app