const { application } = require("express")
const express = require("express")

const materias = require("./routes/materias")

const app = express()

app.use((req, res, next) => {
  console.log("petición hecha a ruta " + (req.url))

  next()
})

app.get("/api", (req, res) => {
  res.json({
    message: "bienvenido a la api rest"
  });
})

app.use("/api", materias)

app.listen(3001, () => console.log("Server escuchando en 3001"))