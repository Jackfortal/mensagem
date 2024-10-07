import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export const getAll = async () => {
    return await prisma.usuarios.findMany()
}

export const getOne = async (id) => {
    return await prisma.usuarios.findUnique(
        {
            where:{
            id:parseInt(id)
            }
        }
    )
} 

export const deletar = async (id) => {
    return await prisma.usuarios.delete(
        {
            where:{
            id:parseInt(id)
            }
        }
    )
} 
export const CreateUser = async (body) => {
    return await prisma.usuarios.create(
        {
            data:body
        }
    )
} 
export const UpdateUser = async (id,body) => {
    return await prisma.usuarios.update(
        {
            where:{
                id:parseInt(id)
            },
            data:body
        }
    )
} 