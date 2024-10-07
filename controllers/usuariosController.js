import * as usuarioRepository from "../repository/usuarioRepository.js"

export const getAll = async (req,res) => {
   try{
    const usuarios = await usuarioRepository.getAll()
    res.status(200).send(usuarios)
   }catch(error){
    res.status(500).send(`O erro foi : ${error}`)
   }
} 
export const getOne = async (req,res) => {
   try{

      let {id} = req.params
    const usuarios = await usuarioRepository.getOne(id)
    res.status(200).send(usuarios)
   }catch(error){
    res.status(500).send(`O erro foi : ${error}`)
   }
} 

export const deletar = async (req,res) => {
   try{

      let {id} = req.params
    const usuarios = await usuarioRepository.deletar(id)
    res.status(200).send(usuarios)
   }catch(error){
    res.status(500).send(`O erro foi : ${error}`)
   }
} 
export const CreateUser = async (req,res) => {
   try{

    const body = req.body
    const usuarios = await usuarioRepository.CreateUser(body)
    res.status(200).send(usuarios)
   }catch(error){
    res.status(500).send(`O erro foi : ${error}`)
   }
} 

export const UpdateUser = async (req,res) => {
   try{

    let {id} = req.params
    let body = req.body
    const usuarios = await usuarioRepository.UpdateUser(id,body)
    res.status(200).send(usuarios)
   }catch(error){
    res.status(500).send(`O erro foi : ${error}`)
   }
} 