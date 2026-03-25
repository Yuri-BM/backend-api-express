import { prisma } from '../helpers/dbConnection.js';

/*
   const publication = {
        title: 'Renan Post',
        description: "Post de exemplo para o usuário Renan",
        authorId: 1
    }
*/

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