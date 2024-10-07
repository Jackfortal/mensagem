import express from "express"
import usuarioRoutes from "./routes/usuarioRoutes.js"

const app = express()
const PORT = 3000

app.use(express.json());
app.use('/usuarios',usuarioRoutes)

app.listen(PORT,() => {
    console.log("Aplicacao rodando na porta 3000")
})

"http://localhost:3000/usuarios"