import { createPublication } from '../../models/publicationModel.js';

export async function createPubliController(req, res){
    try {
        
        const publication = req.body 
        console.log('Dados recebidos para criação de publicação:', publication); // Log para verificar os dados recebidos

        const result = await createPublication(publication);

        res.status(201).json({
            message: "Publicação criada com sucesso!",
            publication: result
        });

    } catch (error) {
        res.status(500).json({ message: 'Erro ao criar publicação', error: error.message });
    }
}