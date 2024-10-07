import express from "express"
import * as usuarioController from "../controllers/usuariosController.js"


const route = express.Router()

route.get("/",usuarioController.getAll)
route.get("/:id",usuarioController.getOne)
route.delete("/:id",usuarioController.deletar)
route.post("/",usuarioController.CreateUser)
route.put("/:id",usuarioController.UpdateUser)
export default route