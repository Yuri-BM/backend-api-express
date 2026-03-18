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