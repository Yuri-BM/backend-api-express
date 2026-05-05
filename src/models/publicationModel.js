import { prisma } from '../helpers/dbConnection.js'
import * as z from 'zod'

/*
   const publication = {
        title: 'Renan Post',
        description: "Post de exemplo para o usuário Renan",
        authorId: 1
    }
*/

const publicationSchema = z.object({
    id: z.int("ID é obrigatório e deve ser um valor numérico")
        .positive("ID deve ser um valor numérico positivo"),
    title: z.string("Título é obrigatório e deve ser uma string")
            .min(1, "Título deve ter no mínimo 1 caractere")
            .max(255, "Título deve ter no máximo 255 caracteres"),
    description: z.string("Desrição é obrigatória e deve ser uma string")
            .min(1, "Desrição deve ter no mínimo 1 caractere")
            .max(500, "Desrição deve ter no máximo 500 caracteres"),
    authorId: z.int("ID do autor é obrigatório e deve ser um valor numérico")
            .positive("ID do autor deve ser um valor numérico positivo")
})

export const validatePublication = (publication, partial = false) => {
    if (partial) {
        return publicationSchema.partial(partial).safeParse(publication)
    }

    return publicationSchema.safeParse(publication)
}

export const createPublication = async (publication) => {
    return await prisma.publication.create({
        data: publication
    });
}

export const getPublications = async () => {
    return await prisma.publication.findMany()
}

export const deletePublication = async (id) => {
    return await prisma.publication.delete({
        where: {
            id
        }
    })
}

export const updatePublication = async (publication, id) => {
    return await prisma.publication.update({
        data: publication,
        where: {
            id
        }
    })
}