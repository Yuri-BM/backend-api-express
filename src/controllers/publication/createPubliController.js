import { createPublication, validatePublication } from '../../models/publicationModel.js';

export async function createPubliController(req, res){
        
    const publication = req.body 

    const {success, error, data} = validatePublication(publication, {id: true})

    if (!success) {
        return res.status(400).json({
            message: "Erro de validação",
            fieldErrors: error.flatten().fieldErrors
        })
    }

    // console.log('Dados recebidos para criação de publicação:', publication); // Log para verificar os dados recebidos

    const result = await createPublication(publication);

    return res.status(201).json({
        message: "Publicação criada com sucesso!",
        publication: result
    });

}